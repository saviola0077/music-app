//created a new router instance
const express = require("express");
const newMusic = require("../controllers/musicController");

const router = express.Router();

//defined routes that listens to post request
router.post("/getMusic", newMusic.getMusic);

module.exports = router;
