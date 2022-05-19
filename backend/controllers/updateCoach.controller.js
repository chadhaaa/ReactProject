const mongoose = require('mongoose')

const Coach = require('../models/coach')

const UpdateCoach = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error: Competence ID invalid !' })
	}
	const coach = await Coach.findOneAndUpdate(
		{ _id: req.params.id },
		{
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
            email: req.body.email,
            birthDate: req.body.birthDate,
            photo: req.body.photo,
            sex: req.body.sex,
            new: req.body.new,
            alerts: req.body.alerts,
            discipline: req.body.discipline,
		},
		{ new: true }
	)


	if (!coach) {
		return res.status(404).send({ Message: 'ERROR ! ' })
	}
	res.json(coach)
	console.log(coach)
}



module.exports = {
	UpdateCoach,
}