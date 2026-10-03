const express = require('express');
const router = express.Router();
const { handleNotification } = require('../services/paymentService');

// POST /api/webhooks/midtrans
router.post('/midtrans', async (req, res) => {
  try {
    const notificationBody = req.body;
    await handleNotification(notificationBody);
    // Midtrans expects a 200 OK
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook error:', error);
    // Even on error, we typically send 200 so Midtrans stops retrying if it's a permanent error,
    // or 500 if we want them to retry. Let's send 500 so they retry in case of DB issues.
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
