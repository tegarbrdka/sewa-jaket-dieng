const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { getAvailableItems } = require('../services/availabilityService');

// GET /api/items/available
router.get('/available', async (req, res, next) => {
  try {
    const { start_date, end_date, category } = req.query;
    
    if (!start_date || !end_date) {
      return res.status(400).json({ error: 'start_date and end_date are required' });
    }

    const availableItems = await getAvailableItems(start_date, end_date, category);
    res.json(availableItems);
  } catch (error) {
    next(error);
  }
});

// GET /api/items
router.get('/', async (req, res, next) => {
  try {
    const { category } = req.query;
    let query = "SELECT * FROM items WHERE status = 'active'";
    const params = [];

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    const [rows] = await pool.execute(query, params);
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// GET /api/items/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.execute('SELECT * FROM items WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
