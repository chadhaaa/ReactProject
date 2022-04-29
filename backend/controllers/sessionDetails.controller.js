const mongoose = require('mongoose')
const Session = require('../models/session')
const CompSession = require('../models/competenceSession')
const StatSession = require('../models/statisticSession')

const FindSessionOne = async (req, res) => {
	try {
		const sessions = await Session.findById(req.params.id)
			.populate('idPlace')
			.populate('programId')
			.populate('idPlayer')

		const statSession = await StatSession.find()
			.where('seanceId')
			.equals(req.params.id)
			.populate('statId')
		const compSession = await CompSession.find()
			.where('seanceId')
			.equals(req.params.id)
			.populate('compId')

		res.send({
			session: sessions,
			stats: statSession.filter((item) => item.statId != null),
			comp: compSession.filter((item) => item.compId != null),
		})
	} catch (err) {
		res.send('Error ' + err)
	}
}

const FindAllSessions = async (req, res) => {
	const sessions = await Session.find()
	if (!sessions) {
		res.status(500).json({ Message: 'Error : Cannot find session !' })
	}
	res.send(sessions)
}

module.exports = {
	FindAllSessions,
	FindSessionOne,
}
