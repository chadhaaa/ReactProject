const express = require('express')
const router = express.Router()
const {
	UpdatePlayer,
	FindAllComp,
	FindAllStats,
} = require('../controllers/updatePlayer.controller')

router.put('/player/:id', UpdatePlayer)
router.get('/com', FindAllComp)
router.get('/stats/:id', FindAllStats)

module.exports = router
