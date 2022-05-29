const mongoose = require('mongoose')
const Coach = require('../models/coach')


const AddNewCoach = async (req, res) => {
	let newCoach = new Coach({
		firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthDate: req.body.birthDate,
	})
	newCoach = await newCoach.save()
	if (!newCoach || newCoach.firstname =='' || newCoach.lastname =='' || newCoach.birthDate =='' 
	|| !newCoach.firstname || !newCoach.lastname || !newCoach.birthDate
	|| newCoach.new != true || newCoach.alerts.length != 0  || newCoach.discipline != ''
	) {
		return res.status(404).send({ Message: 'Error : Enable to signup a new coach' })
	}
	res.send(newCoach)
}

module.exports = {
	AddNewCoach
}