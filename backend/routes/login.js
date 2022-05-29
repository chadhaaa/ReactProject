const express = require('express')
const router = express.Router()
const { FindUser } = require('../controllers/login.controller')

router.post('/login', FindUser)

module.exports = router
