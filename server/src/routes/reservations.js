const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { createReservation, getReservation } = require('../services/reservationService');

// POST /api/reservations
router.post('/', async (req, res, next) => {
  try {
    const { itemId, startDate, endDate, quantity, userName, userPhone, userEmail } = req.body;

    if (!itemId || !startDate || !endDate || !quantity || !userName || !userPhone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Upsert User
    let userId;
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE phone = ?',
      [userPhone]
    );

    if (existingUsers.length > 0) {
      userId = existingUsers[0].id;
      // Optional: Update name/email if needed
    } else {
      const [result] = await pool.execute(
        'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)',
        [userName, userEmail || null, userPhone]
      );
      userId = result.insertId;
    }

    // Create Reservation
    const reservation = await createReservation(userId, itemId, startDate, endDate, quantity);
    
    res.status(201).json(reservation);
  } catch (error) {
    if (error.message.includes('Not enough items') || error.message.includes('Item not found')) {
      return res.status(400).json({ error: error.message });
    }
    next(error);
  }
});

// GET /api/reservations/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const reservation = await getReservation(id);

    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    res.json(reservation);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
