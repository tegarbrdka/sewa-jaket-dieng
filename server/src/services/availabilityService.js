const pool = require('../config/database');

/**
 * Checks the booked quantity of an item within a date range.
 * @param {number|string} itemId - The ID of the item.
 * @param {string} startDate - Start date of the reservation (YYYY-MM-DD).
 * @param {string} endDate - End date of the reservation (YYYY-MM-DD).
 * @returns {Promise<number>} - The number of booked items in the given date range.
 */
async function checkAvailability(itemId, startDate, endDate) {
  const query = `
    SELECT COALESCE(SUM(quantity), 0) as booked
    FROM reservations
    WHERE item_id = ?
      AND status IN ('pending', 'confirmed', 'active')
      AND start_date < ?
      AND end_date > ?
  `;
  const [rows] = await pool.execute(query, [itemId, endDate, startDate]);
  return Number(rows[0].booked);
}

/**
 * Gets a list of available items and their available stock within a date range.
 * Optionally filters by category.
 * @param {string} startDate - Start date (YYYY-MM-DD).
 * @param {string} endDate - End date (YYYY-MM-DD).
 * @param {string} [category] - Optional category filter.
 * @returns {Promise<Array>} - List of items with available > 0.
 */
async function getAvailableItems(startDate, endDate, category = null) {
  let query = 'SELECT * FROM items WHERE status = "active"';
  const params = [];
  
  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }
  
  const [items] = await pool.execute(query, params);
  const availableItems = [];

  for (const item of items) {
    const booked = await checkAvailability(item.id, startDate, endDate);
    const available = item.stock_total - booked;
    if (available > 0) {
      availableItems.push({
        ...item,
        available_stock: available
      });
    }
  }

  return availableItems;
}

/**
 * Checks if a specific quantity of an item is available.
 * @param {number|string} itemId - The ID of the item.
 * @param {string} startDate - Start date (YYYY-MM-DD).
 * @param {string} endDate - End date (YYYY-MM-DD).
 * @param {number} quantity - The requested quantity.
 * @returns {Promise<boolean>} - True if enough stock is available, false otherwise.
 */
async function isItemAvailable(itemId, startDate, endDate, quantity) {
  const [rows] = await pool.execute('SELECT stock_total FROM items WHERE id = ?', [itemId]);
  if (!rows || rows.length === 0) return false;
  
  const totalStock = rows[0].stock_total;
  const booked = await checkAvailability(itemId, startDate, endDate);
  
  return (totalStock - booked) >= quantity;
}

module.exports = {
  checkAvailability,
  getAvailableItems,
  isItemAvailable
};
