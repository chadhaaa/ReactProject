const mongoose = require('mongoose')
const Player = require('../models/player')
const CompPlayer = require('../models/competencePlayer')
const StatPlayer = require('../models/statisticPlayer')

const FindPlayerOne = async (req, res) => {
	const players = await Player.findOne({ _id: req.params.id })

	const statPlayer = await StatPlayer.find()
		.where('playerId')
		.equals(req.params.id)
		.populate('statId')
	const compPlayer = await CompPlayer.find()
		.where('playerId')
		.equals(req.params.id)
		.populate('compId')

	res.send({ player: players, stat: statPlayer, comp: compPlayer })

	if (!players) {
		res.status(500).json({ Message: 'EROOOOOOOOR player IS NOT FOUND' })
	}
	res.send(players)
}

module.exports = {
	FindPlayerOne,
}
