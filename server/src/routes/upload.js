const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

// POST /api/upload/ktp
router.post('/ktp', upload.single('ktp'), (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Construct URL for the uploaded file
    // Assumes the app is served and statically exposes '/uploads'
    const protocol = req.protocol;
    const host = req.get('host');
    const fileUrl = `${protocol}://${host}/uploads/ktp/${req.file.filename}`;

    res.json({
      message: 'File uploaded successfully',
      url: fileUrl,
      filename: req.file.filename
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
