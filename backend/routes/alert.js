const express = require('express')
const router = express.Router()
const {
    FindOneAlert,
	FindAlertAll,
	AddNewAlert,
	UpdateAlert,
	DeleteAlert,
} = require('../controllers/alert.controller')

router.get('/alert/:id', FindOneAlert)

router.get('/alerts', FindAlertAll)

router.post('/alert', AddNewAlert)

router.put('/alert/:id', UpdateAlert)

router.delete('/alert/:id', DeleteAlert)

module.exports = router
