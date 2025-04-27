//created a new router instance
const express = require("express");
const newMusic = require("../controllers/musicController");

const router = express.Router();

//defined routes that listens to post request
router.post("/getMusic", newMusic.getMusic);

//Create a music
router.post("/createMusic", newMusic.createMusic);

//  Route to delete music by ID
router.post('/deleteMusic/:id', newMusic.deleteMusic);

// Route to get music by ID
router.post('/getMusicById/:id', newMusic.getMusicById);

//Route to update music by ID
router.post('/updateMusic/:id', newMusic.updateMusic);


module.exports = router;
