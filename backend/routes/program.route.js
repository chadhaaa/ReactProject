const express = require('express')
const router = express.Router()
const {
	FindOneProgram,
	FindAllProgram,
	AddNewProgram,
	UpdateProgram,
	DeleteProgram
} = require('../controllers/program.controller')

router.get('/program/:id', FindOneProgram)

router.get('/programs', FindAllProgram)

router.post('/program', AddNewProgram)

router.put('/program/:id', UpdateProgram)

router.delete('/program/:id', DeleteProgram)

module.exports = router