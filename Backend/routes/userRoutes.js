const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

router.post("/createUser", userController.createUser);
router.post("/getUserEmail", userController.getUserByEmail);

module.exports = router;
