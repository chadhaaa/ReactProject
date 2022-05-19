const express = require('express')
const router = express.Router()
const {
	FindOneChllg,
	FindAllChllg,
	AddNewChllg,
	UpdateChallenge,
	DeleteChllg
} = require('../controllers/challenge.controller')

router.get('/challenge/:id', FindOneChllg)

router.get('/challenges', FindAllChllg)

router.post('/challenge', AddNewChllg)

router.put('/challenge/:id', UpdateChallenge)


router.delete('/challenge/:id', DeleteChllg)

module.exports = router