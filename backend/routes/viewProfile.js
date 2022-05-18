const express = require('express')
const router = express.Router()
const { FindPlayerOne } = require('../controllers/viewProfile.controller')

router.get('/viewProfile/:id', FindPlayerOne)

module.exports = router
