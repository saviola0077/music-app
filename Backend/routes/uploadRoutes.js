const express = require('express');
const router = express.Router();
const upload = require('../Middleware/upload');
const  uploadFile  = require('../controllers/uploadController');

// This is the final route: POST http://localhost:5000/upload

router.post(
    '/upload',
    upload.fields([
      { name: 'image', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
    uploadFile
  );

module.exports = router;
