const mongoose = require('mongoose')

const Player = require('../models/player')
const Comp = require('../models/competence')
const Stats = require('../models/statistics')

const StatPlayer = require('../models/statisticPlayer')
const CompPlayer = require('../models/competencePlayer')

const UpdatePlayer = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error: Competence ID invalid !' })
	}
	const player = await Player.findOneAndUpdate(
		{ _id: req.params.id },
		{
			sessionPrice: req.body.sessionPrice,
			sessionNumbers: req.body.sessionNumbers,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			tel: req.body.tel,
			height: req.body.height,
			weight: req.body.weight,
			country: req.body.country,
			scholar: req.body.scholar,
			email: req.body.email,
			password: req.body.password,
			active: req.body.active,
		},
		{ new: true }
	)

	const statPlayer = await StatPlayer.deleteMany({
		playerId: req.params.id,
	})
	Array.from(req.body.stats).forEach((stats) => {
		const statsPlayer = new StatPlayer({
			statId: stats,
			playerId: player._id,
		})
		statsPlayer.save()
	})

	const compPlayer = await CompPlayer.deleteMany({
		playerId: req.params.id,
	})
	Array.from(req.body.comp).forEach((comp) => {
		const compPlayer = new CompPlayer({
			compId: comp,
			playerId: player._id,
		})
		compPlayer.save()
	})

	if (!player) {
		return res.status(404).send({ Message: 'ERROR ! ' })
	}
	res.json(player)
}

const FindAllComp = async (req, res) => {
	try {
		const comp = await Comp.find()

		res.json(comp)
	} catch (err) {}
}

const FindAllStats = async (req, res) => {
	try {
		const stats = await Stats.find().where(req.params.id, 'disciplineId')
		res.json(stats)
	} catch (err) {}
}

module.exports = {
	UpdatePlayer,
	FindAllComp,
	FindAllStats,
}
