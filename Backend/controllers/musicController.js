const music = require("../models/musicModel");
const sequelize = require("../config/db"); //

sequelize.sync({ alter: true }) // will match model with DB table
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Failed to sync database:', err));


// Get all music data
exports.getMusic = async (req, res) => {
  try {
    const retMusic = await music.findAll();

    //The json format is like this example {"title":"Joy is Coming","artist":"Asake"}
    res.status(200).json(retMusic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Insert music data into the database
exports.createMusic = async (req, res) => {
  const musicData = req.body
  try {
    const retMusic = await music.create(musicData);
    res.status(201).json(retMusic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; 


// Delete music by ID
exports.deleteMusic = async (req, res) => {
  const { id } = req.params; // Use req.params to get the ID from URL params

  try {
    const deletedMusic = await music.findByPk(id); // Find music by primary key (ID)

    if (!deletedMusic) {
      return res.status(404).json({ error: 'Music not found', id : id });
    }

    await deletedMusic.destroy(); // Delete the found music record
    res.status(200).json({ message: 'Music deleted successfully', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//
exports.getMusicById = async (req, res) => {
  const { id } = req.params; // Get the ID from the URL

  try {
    const musicData = await music.findByPk(id); // Find music by primary key (ID)

    if (!musicData) {
      return res.status(404).json({ error: 'Music not found', id });
    }

    res.status(200).json(musicData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get music by title
exports.getMusicByTitle = async (req, res) => {
  const { title } = req.body; // destructure request body to get title

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


// Update music data by ID
exports.updateMusic = async (req, res) => {
  const { id } = req.params; // Get the ID from URL
  const musicData = req.body; // Data to update

  try {
    const musicToUpdate = await music.findByPk(id);

    if (!musicToUpdate) {
      return res.status(404).json({ error: 'Music not found', id });
    }

    await musicToUpdate.update(musicData);

    res.status(200).json({ message: 'Music updated successfully', updatedMusic: musicToUpdate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
