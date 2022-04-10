const mongoose = require('mongoose')

const Player = require('../models/player')

const multer = require('multer')

const storage = multer.diskStorage({
	destination: './uploads/',
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	},
})
const upload = multer({
	storage: storage,
})

const UpdateProfile = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'INVALID Player ID' })
	}
	const player = await Player.findOneAndUpdate(
		{ _id: req.params.id },
		{
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			password: req.body.password,
			birth: req.body.birth,
			picture: { data: req.file.filename, contentType: 'image/jpg' },
			//   email: req.body.email,
			//   sex: req.body.sex,
			height: req.body.height,
			weight: req.body.weight,
			goal: req.body.goal,
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
