const express = require('express')
const router = express.Router()
const {
	
	AddNewSession,
	
} = require('../controllers/session.controller')

router.post('/newSession', AddNewSession)

module.exports = router