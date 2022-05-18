const express = require('express')
const router = express.Router()
const {
	FindOneComp,
	FindCompAll,
	AddNewComp,
	UpdateComp,
	DeleteComp,
} = require('../controllers/comp.controller')

router.get('/competence/:id', FindOneComp)

router.get('/competences', FindCompAll)

router.post('/competence', AddNewComp)

router.put('/competence/:id', UpdateComp)

router.delete('/competence/:id', DeleteComp)

module.exports = router
