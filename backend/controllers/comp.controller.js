const mongoose = require('mongoose')
const Comp = require('../models/competence')

const FindOneComp = async (req, res) => {
	const compts = await Comp.findOne({ _id: req.params.id })
	if (!compts) {
		res.status(500).json({ Message: 'Error : Enable to find Competence' })
	}
	res.send(compts)
}

const FindCompAll = async (req, res) => {
	const compts = await Comp.find()
	if (!compts) {
		res.status(500).json({ Message: 'Error : Enable to find Competence' })
	}
	res.send(compts)
}

const AddNewComp = async (req, res) => {
	let newComp = new Comp({
		name: req.body.name,
		description: req.body.description,
		link: req.body.link,
		visibility: req.body.visibility,
		stars: req.body.stars,
	})
	newComp = await newComp.save()
	if (!newComp) {
		return res.status(404).send({ Message: 'Error : Enable to create a new Competence' })
	}
	res.send(newComp)
}

const UpdateComp = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error : Invalid Competence Id' })
	}
	const compt = await Comp.findByIdAndUpdate(
		req.params.id,
		{
			link: req.body.link,
			visibility: req.body.visibility,
			name: req.body.name,
			description: req.body.description,
			stars: req.body.stars,
		},
		{ new: true }
	)
	if (!compt) {
		return res.status(404).send({ Message: 'Error : Enable to update the Competence' })
	}
	res.send(compt)
}

const DeleteComp = (req, res) => {
	Comp.findByIdAndRemove(req.params.id)
		.then((compt) => {
			if (compt) {
				return res
					.status(200)
					.json({ success: true, Message: 'Competence was successfully deleted !' })
			} else {
				return res
					.status(404)
					.json({ success: false, Message: 'Error : Enable to delete the Competence' })
			}
		})
		.catch((err) => {
			return res.status(404).json({ success: false, Message: err })
		})
}

module.exports = {
	FindOneComp,
	FindCompAll,
	AddNewComp,
	UpdateComp,
	DeleteComp,
}
