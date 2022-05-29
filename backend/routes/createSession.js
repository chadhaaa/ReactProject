const express = require('express')
const router = express.Router()
const {
	
	AddNewSession,
	
} = require('../controllers/Createsession.controller')

router.post('/newSession/:id', AddNewSession)

module.exports = router