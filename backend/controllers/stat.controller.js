const mongoose = require('mongoose')
const Stat = require('../models/statistics')
const Discipline = require('../models/discipline')

const FindStatOne = async (req, res) => {
	const stats = await Stat.findOne({ _id: req.params.id })
	if (!stats) {
		res.status(500).json({ Message: 'Error : Enable to find Statistic' })
	}
	res.send(stats)
}

const FindDisciplineStat = async (req, res) => {
	const discipline = await Discipline.findById(req.params.id)
	if (!discipline) {
		res.status(500).json({ Message: 'Error : Enable to find Discipline' })
	}
	const stats = await Stat.findOne({ disciplineId: req.params.id })
	if (!stats) {
		res.status(500).json({ Message: 'Error : Enable to find Statistic' })
	}
	res.send(stats)
}

const FindAllStat = async (req, res) => {
	const stats = await Stat.find()
	if (!stats) {
		res.status(500).json({ Message: 'Error : Enable to find Discipline' })
	}
	res.send(stats)
}

const AddNewStat = async (req, res) => {
	let newStat = new Stat({
		type: req.body.type,
		unit: req.body.unit,
		title: req.body.title,
		description: req.body.description,
		link: req.body.link,
		visibility: req.body.visibility,
		minMax: req.body.minMax,
		statAlert: req.body.statAlert,
		currentState: req.body.currentState,
		disciplineId: req.body.disciplineId,
	})
	newStat = await newStat.save()
	if (!newStat) {
		return res.status(404).send({ Message: 'Error : Enable to create a new Statistic' })
	}
	res.send(newStat)
}

const UpdateStat = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error : Invalid Statistic Id' })
	}
	const stat = await Stat.findByIdAndUpdate(
		req.params.id,
		{
			title: req.body.title,
			unit: req.body.unit,
			type: req.body.type,
			description: req.body.description,
			link: req.body.link,
			visibility: req.body.visibility,
			currentState: req.body.currentState,
			minMax: req.body.minMax,
			statAlert: req.body.statAlert,
			disciplineId: req.body.disciplineId,
		},
		{ new: true }
	)
	if (!stat) {
		return res.status(404).send({ Message: 'Error : Enable to Update a Statistic' })
	}
	res.send(stat)
}

const DeleteStat = (req, res) => {
	Stat.findByIdAndRemove(req.params.id)
		.then((stat) => {
			if (stat) {
				return res
					.status(200)
					.json({ success: true, Message: 'Statistic was successfully deleted !' })
			} else {
				return res
					.status(404)
					.json({ success: false, Message: 'Error : Enable to delete the Statistic !' })
			}
		})
		.catch((err) => {
			return res.status(404).json({ success: false, Message: err })
		})
}

module.exports = {
	FindStatOne,
	FindDisciplineStat,
	FindAllStat,
	AddNewStat,
	UpdateStat,
	DeleteStat,
}
