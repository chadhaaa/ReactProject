const express = require('express')
const router = express.Router()
const {
	UpdatePlayer,
	FindAllComp,
	FindAllStats,
} = require('../controllers/updatePlayer.controller')

router.put('/playerUpdate/:id', UpdatePlayer)
router.get('/competences', FindAllComp)
router.get('/statistics/:id', FindAllStats)

module.exports = router
