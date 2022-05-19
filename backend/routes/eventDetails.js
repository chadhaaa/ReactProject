const express = require('express')
const router = express.Router()
const {
	FindEventOne,
	FindAllEvents,
	
} = require('../controllers/event.controller')

router.get('/event/:id', FindEventOne)

router.get('/events', FindAllEvents)

module.exports = router