// controllers/cloudinaryUpload.js
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: 'ddl0ffhyc',
  api_key: '592185792286143',
  api_secret: 'TYCz8ncQzHV8P5hhwPS6XgnYsKE',
});


// Make sure you have configured your cloudinary details (key, secret, cloud_name) somewhere globally
const uploadFile = async (req, res) => {
  try {
    const imageFile = req.files.image?.[0];
    const audioFile = req.files.audio?.[0];

    if (!imageFile || !audioFile) {
      return res.status(400).json({ error: 'Image and audio are required' });
    }

    // Upload image
    const imageResult = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: 'image',
    });

    // Upload audio
    const audioResult = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: 'video', // Cloudinary treats audio/video the same
    });

    // Clean up local files
    fs.unlinkSync(imageFile.path);
    fs.unlinkSync(audioFile.path);

    res.status(200).json({
      imageUrl: imageResult.secure_url,
      audioUrl: audioResult.secure_url,
      imagePublicId: imageResult.public_id,
      audioPublicId: audioResult.public_id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = uploadFile;