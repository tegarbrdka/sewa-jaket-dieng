const express = require('express');
const router = express.Router();
const { getReservation } = require('../services/reservationService');
const { createSnapTransaction, getTransactionStatus } = require('../services/paymentService');

// POST /api/payments/create
router.post('/create', async (req, res, next) => {
  try {
    const { reservationId } = req.body;

    if (!reservationId) {
      return res.status(400).json({ error: 'reservationId is required' });
    }

    const reservation = await getReservation(reservationId);
    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    const user = {
      name: reservation.user_name,
      email: reservation.user_email,
      phone: reservation.user_phone
    };

    const paymentData = await createSnapTransaction(reservation, user);
    res.json(paymentData);
  } catch (error) {
    next(error);
  }
});

// GET /api/payments/status/:orderId
router.get('/status/:orderId', async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const status = await getTransactionStatus(orderId);
    res.json(status);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
