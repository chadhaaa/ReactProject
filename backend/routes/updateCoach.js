const express = require('express')
const router = express.Router()
const {
	UpdateCoach,
 } = require('../controllers/updateCoach.controller')

router.put('/coachUpdate/:id', UpdateCoach)

module.exports = router