const mongoose = require('mongoose')
const program = require('../models/program.js')

const FindOneProgram = async (req, res) => {
	const prog = await program.findOne({ _id: req.params.id })
	if (!program) {
		res.status(500).json({ Message: 'Error : Enable to find program' })
	}

	res.json(prog)
}

const FindAllProgram = async (req, res) => {
	
	const progs = await program.find()
	if (!progs) {
		res.status(500).json({ Message: 'Error : Enable to find programs' })
	}
	res.json(progs)
}

const AddNewProgram = async (req, res) => {
	let newProg = new program({
		title: req.body.title,
		description: req.body.description,
		link: req.body.link,
		picture: req.body.picture,
		idStat: req.body.idStat,
		idComp: req.body.idComp,
	})
	newProg = await newProg.save()
	if (!newProg) {
		return res.status(404).send({ Message: 'Error : Enable to create a new program' })
	}
	res.json(newProg)
}

const UpdateProgram = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error : Invalid program Id' })
	}
	const prog = await program.findByIdAndUpdate(req.params.id,
		{
			title: req.body.title,
			description: req.body.description,
			link: req.body.link,
			picture: req.body.picture,
			idStat: req.body.idStat,
			idComp: req.body.idComp,
		},
		{ new: true }
	)
	if (!prog) {
		return res.status(404).send({ Message: 'Error : Enable to update the program' })
	}
	res.json(prog)
}

const DeleteProgram = (req, res) => {
	program.findByIdAndRemove(req.params.id)
		.then((prog) => {
			if (prog) {
				return res
					.status(200)
					.json({ success: true, Message: 'program was successfully deleted !' })
			} else {
				return res
					.status(404)
					.json({ success: false, Message: 'Error : Enable to delete the program' })
			}
		})
		.catch((err) => {
			return res.status(404).json({ success: false, Message: err })
		})
}

module.exports = {
	FindOneProgram,
	FindAllProgram,
	AddNewProgram,
	UpdateProgram,
	DeleteProgram
}