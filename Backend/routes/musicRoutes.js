const express = require("express");
const newMusic = require("../controllers/musicController");

const router = express.Router();


router.post("/getMusic", newMusic.getMusic);

module.exports = router;
