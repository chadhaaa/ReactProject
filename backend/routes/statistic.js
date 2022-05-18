const express = require('express')
const router = express.Router()
const {
	FindStatOne,
	FindDisciplineStat,
	FindAllStat,
	AddNewStat,
	UpdateStat,
	DeleteStat,
} = require('../controllers/stat.controller')

router.get('/statistic/:id', FindStatOne)

router.get('/statisticDiscipline/:id', FindDisciplineStat)

router.get('/statistics', FindAllStat)

router.post('/statistic', AddNewStat)

router.put('/statistic/:id', UpdateStat)

router.delete('/statistic/:id', DeleteStat)

module.exports = router
