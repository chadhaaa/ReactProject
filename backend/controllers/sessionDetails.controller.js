const mongoose = require('mongoose')
const Session = require('../models/session')
const CompSession = require('../models/competenceSession')
const StatSession = require('../models/statisticSession')

const FindSessionOne = async (req, res) => {
	const sessions = await Session.findOne({ _id: req.params.id })

	const statSession = await StatSession.find()
		.where('seanceId')
		.equals(req.params.id)
		.populate('statId')
	const compSession = await CompSession.find()
		.where('seanceId')
		.equals(req.params.id)
		.populate('compId')

	res.send({ session: sessions, stat: statSession, comp: compSession })

	if (!sessions) {
		res.status(500).json({ Message: 'EROOOOOOOOR seance IS NOT FOUND' })
	}
	res.send(sessions)
}

const FindAllSessions = async (req, res) => {
	const sessions = await Session.find()
	if (!sessions) {
		res.status(500).json({ Message: 'EROOOOOOOOR Session IS NOT FOUND' })
	}
	res.send(sessions)
}

module.exports = {
	FindAllSessions,
	FindSessionOne,
}
