const express = require('express')
const router = express.Router()
const {
	FindAllSessions,
	FindSessionOne,
} = require('../controllers/sessionDetails.controller')

router.get('/sessionDetails/:id', FindSessionOne)

router.get('/sessionSDetails', FindAllSessions)

module.exports = router
