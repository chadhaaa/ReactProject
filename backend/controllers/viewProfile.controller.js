const mongoose = require('mongoose')
const Player = require('../models/player')
const CompPlayer = require('../models/competencePlayer')
const StatPlayer = require('../models/statisticPlayer')

const FindPlayerOne = async (req, res) => {
	try {
		const players = await Player.findById(req.params.id)

		const statPlayer = await StatPlayer.find()
			.where('playerId')
			.equals(req.params.id)
			.populate('statId')
		const compPlayer = await CompPlayer.find()
			.where('playerId')
			.equals(req.params.id)
			.populate('compId')

		res.send({
			player: players,
			stats: statPlayer.filter((item) => item.statId != null),
			comp: compPlayer.filter((item) => item.compId != null),
		})
	} catch (err) {
		'Error ' + err
	}
}

module.exports = {
	FindPlayerOne,
}
