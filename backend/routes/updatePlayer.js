const express = require("express");
const router = express.Router();
const { UpdatePlayer } = require("../controllers/updatePlayer.controller");

router.put("/player/:id", UpdatePlayer);

module.exports = router;