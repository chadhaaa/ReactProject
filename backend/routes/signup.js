const express = require('express')
const router = express.Router()
const {
	AddNewCoach
} = require("../controllers/signup.controller")



router.post('/signup',AddNewCoach)


module.exports = router