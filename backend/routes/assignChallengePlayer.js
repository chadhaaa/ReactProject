const express = require('express')
const router = express.Router()
const {
	UpdateChallenge
} = require('../controllers/challenge.controller')


router.put('/assignChallengePlayer/:id', UpdateChallenge)

module.exports = router