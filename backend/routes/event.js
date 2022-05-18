const express = require('express')
const router = express.Router()
const {
	FindOneEvent,
	FindAllEvents,
	AddNewEvent,
	UpdateEvent,
	DeleteEvent
} = require('../controllers/event.controller')

router.get('/event/:id', FindOneEvent)

router.get('/events', FindAllEvents)

router.post('/event', AddNewEvent)

router.put('/event/:id', UpdateEvent)

router.delete('/event/:id', DeleteEvent)

module.exports = router