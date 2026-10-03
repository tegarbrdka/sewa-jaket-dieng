const snap = require('../config/midtrans');
const pool = require('../config/database');
const crypto = require('crypto');

/**
 * Creates a Midtrans Snap transaction for a given reservation.
 * @param {Object} reservation 
 * @param {Object} user 
 * @returns {Promise<Object>} Contains snapToken, redirectUrl, and orderId
 */
async function createSnapTransaction(reservation, user) {
  const orderId = `SJD-${reservation.id}-${Date.now()}`;
  const grossAmount = Math.round(reservation.total_price);

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: grossAmount
    },
    item_details: [{
      id: reservation.item_id,
      price: grossAmount / reservation.quantity, // Note: Simplified if items vary
      quantity: reservation.quantity,
      name: `Rental of Item ID ${reservation.item_id}`
    }],
    customer_details: {
      first_name: user.name,
      email: user.email,
      phone: user.phone
    },
    enabled_payments: ['qris', 'bca_va', 'bni_va', 'bri_va', 'echannel', 'permata_va']
  };

  const snapResponse = await snap.createTransaction(parameter);
  
  // Save transaction locally
  await pool.execute(
    `INSERT INTO transactions (reservation_id, midtrans_order_id, gross_amount, payment_status, snap_token, snap_redirect_url)
     VALUES (?, ?, ?, 'pending', ?, ?)`,
    [reservation.id, orderId, grossAmount, snapResponse.token, snapResponse.redirect_url]
  );

  return {
    snapToken: snapResponse.token,
    redirectUrl: snapResponse.redirect_url,
    orderId
  };
}

/**
 * Handles incoming notification from Midtrans webhook.
 * @param {Object} notificationBody 
 * @returns {Promise<string>} Processing status
 */
async function handleNotification(notificationBody) {
  const {
    order_id,
    status_code,
    gross_amount,
    signature_key,
    transaction_status
  } = notificationBody;

  // Verify signature
  const serverKey = process.env.MIDTRANS_SERVER_KEY;
  const signatureStr = `${order_id}${status_code}${gross_amount}${serverKey}`;
  const computedSignature = crypto.createHash('sha512').update(signatureStr).digest('hex');

  if (computedSignature !== signature_key) {
    throw new Error('Invalid signature key');
  }

  // Find transaction
  const [txRows] = await pool.execute('SELECT * FROM transactions WHERE midtrans_order_id = ?', [order_id]);
  if (txRows.length === 0) {
    throw new Error('Transaction not found');
  }
  const tx = txRows[0];
  const reservationId = tx.reservation_id;

  let newPaymentStatus = 'pending';
  let newReservationStatus = 'pending';

  if (transaction_status === 'settlement' || transaction_status === 'capture') {
    newPaymentStatus = 'settlement';
    newReservationStatus = 'confirmed';
  } else if (transaction_status === 'deny' || transaction_status === 'cancel' || transaction_status === 'expire') {
    newPaymentStatus = transaction_status;
    newReservationStatus = 'cancelled';
  }

  const connection = await pool.getConnection();
  await connection.beginTransaction();

  try {
    await connection.execute(
      'UPDATE transactions SET payment_status = ? WHERE id = ?',
      [newPaymentStatus, tx.id]
    );
    
    if (newReservationStatus !== 'pending') {
      await connection.execute(
        'UPDATE reservations SET status = ? WHERE id = ?',
        [newReservationStatus, reservationId]
      );
    }
    
    await connection.commit();
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }

  return newPaymentStatus;
}

/**
 * Gets transaction status from Midtrans directly.
 * @param {string} orderId 
 */
async function getTransactionStatus(orderId) {
  return await snap.transaction.status(orderId);
}

module.exports = {
  createSnapTransaction,
  handleNotification,
  getTransactionStatus
};
