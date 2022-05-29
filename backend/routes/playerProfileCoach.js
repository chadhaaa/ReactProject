const express = require('express')
const router = express.Router()
const { FindPlayerAndStat } = require('../controllers/playerProfileCoach.controller')

router.get('/getProfileByCoach/:id', FindPlayerAndStat)

module.exports = router
