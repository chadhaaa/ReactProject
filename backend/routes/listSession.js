const express = require('express')
const router = express.Router()
const {
	
	listSession,
	
} = require('../controllers/listSession.controller')

router.get('/listSession', listSession)

module.exports = router