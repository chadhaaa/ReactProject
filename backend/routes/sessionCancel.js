const express = require('express')
const router = express.Router()
const {
	UpdateSession,
 } = require('../controllers/sessionCancel.controller')

router.put('/sessionCancel/:id', UpdateSession)

module.exports = router