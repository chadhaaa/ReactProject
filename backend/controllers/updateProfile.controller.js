const mongoose = require('mongoose')

const Player = require('../models/player')

const multer = require('multer')
const bcrypt = require('bcrypt')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/')
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	},
})
const upload = multer({
	storage: storage,
})

const UpdateProfile = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error : Player Id is Invalid' })
	}
	const player = await Player.findOneAndUpdate(
		{ _id: req.params.id },
		{
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			password: bcrypt.hashSync(req.body.password, 12),
			birthDate: req.body.birthDate,
			picture: req.file.originalname,
			email: req.body.email,
			height: req.body.height,
			weight: req.body.weight,
			goal: req.body.goal,
			tel: req.body.tel,
			country: req.body.country,
			scholar: req.body.scholar,
		},
		{ new: true }
	)
	if (!player) {
		return res.status(404).send({ Message: 'error' })
	}
	res.json(player)
}

module.exports = {
	UpdateProfile,
	upload,
}
