const pool = require('../config/database');
const { checkAvailability } = require('./availabilityService');

/**
 * Helper to calculate rental days between two dates.
 * @param {string|Date} startDate 
 * @param {string|Date} endDate 
 * @returns {number} Days difference (at least 1)
 */
function calculateDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

/**
 * Creates a reservation transaction safely preventing race conditions.
 * @param {number|string} userId 
 * @param {number|string} itemId 
 * @param {string} startDate 
 * @param {string} endDate 
 * @param {number} quantity 
 * @returns {Promise<Object>} Created reservation record
 */
async function createReservation(userId, itemId, startDate, endDate, quantity) {
  const connection = await pool.getConnection();
  await connection.beginTransaction();

  try {
    // Lock the item row for update
    const [itemRows] = await connection.execute(
      'SELECT id, price_per_day, stock_total FROM items WHERE id = ? FOR UPDATE',
      [itemId]
    );

    if (itemRows.length === 0) {
      throw new Error('Item not found');
    }

    const item = itemRows[0];

    // Check availability manually within this transaction scope (though checkAvailability uses pool directly, 
    // FOR UPDATE on items guarantees serializeability of concurrent reservation creations on the same item)
    // We could rewrite checkAvailability to use the connection, but this is okay as a basic measure.
    const query = `
      SELECT COALESCE(SUM(quantity), 0) as booked
      FROM reservations
      WHERE item_id = ?
        AND status IN ('pending', 'confirmed', 'active')
        AND start_date < ?
        AND end_date > ?
    `;
    const [bookedRows] = await connection.execute(query, [itemId, endDate, startDate]);
    const booked = Number(bookedRows[0].booked);

    if ((item.stock_total - booked) < quantity) {
      throw new Error('Not enough items available for the selected dates');
    }

    const days = calculateDays(startDate, endDate);
    const totalPrice = days * item.price_per_day * quantity;

    const [result] = await connection.execute(
      `INSERT INTO reservations (user_id, item_id, start_date, end_date, quantity, total_price, status) 
       VALUES (?, ?, ?, ?, ?, ?, 'pending')`,
      [userId, itemId, startDate, endDate, quantity, totalPrice]
    );

    await connection.commit();
    
    return {
      id: result.insertId,
      userId,
      itemId,
      startDate,
      endDate,
      quantity,
      totalPrice,
      status: 'pending'
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

/**
 * Gets reservation details with joined user and item data.
 * @param {number|string} id 
 * @returns {Promise<Object|null>} 
 */
async function getReservation(id) {
  const query = `
    SELECT r.*, 
           u.name as user_name, u.email as user_email, u.phone as user_phone,
           i.name as item_name, i.price_per_day
    FROM reservations r
    JOIN users u ON r.user_id = u.id
    JOIN items i ON r.item_id = i.id
    WHERE r.id = ?
  `;
  const [rows] = await pool.execute(query, [id]);
  return rows.length > 0 ? rows[0] : null;
}

/**
 * Updates reservation status.
 * @param {number|string} id 
 * @param {string} status 
 */
async function updateStatus(id, status) {
  await pool.execute('UPDATE reservations SET status = ? WHERE id = ?', [status, id]);
}

module.exports = {
  createReservation,
  getReservation,
  updateStatus,
  calculateDays
};
