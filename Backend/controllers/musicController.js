const music = require("../models/musicModel");



exports.getMusic = async (req, res) => {
  try {
    const retMusic = await music.findAll();
    res.status(200).json(retMusic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMusic = async (req, res) => {
  try {
    const retMusic = await music.create(req.body);
    res.status(201).json(retMusic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; 


exports.getMusicByTitle = async (req, res) => {
  const { title } = req.body; // or req.body, depending on your route setup

  try {
    const retMusic = await music.findOne({ where: { title } });

    if (!retMusic) {
      return res.status(404).json({ message: "Music not found." });
    }

    res.status(200).json(retMusic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 
