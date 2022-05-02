const express = require('express')
const router = express.Router()
const { UpdatePlayer, FindAllComp } = require('../controllers/updatePlayer.controller')

router.put('/player/:id', UpdatePlayer)
router.get('/com', FindAllComp)

module.exports = router
