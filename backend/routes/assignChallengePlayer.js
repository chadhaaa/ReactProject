const express = require('express')
const router = express.Router()
const {
	assignChallengePlayer
} = require('../controllers/challenge.controller')


router.put('/assignChallengePlayer/:id', assignChallengePlayer)

module.exports = router