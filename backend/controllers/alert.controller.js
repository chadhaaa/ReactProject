const mongoose = require('mongoose')
const alert = require('../models/alert')

const FindOneAlert = async (req, res) => {
	const alerts = await alert.findOne({ _id: req.params.id })
	if (!alerts) {
		res.status(500).json({ Message: 'Error : Enable to find alert' })
	}
	res.send(alerts)
}

const FindAlertAll = async (req, res) => {
	const alerts = await alert.find()
	if (!alerts) {
		res.status(500).json({ Message: 'Error : Enable to find alert' })
	}
	res.send(alerts)
}

const AddNewAlert = async (req, res) => {
	let newAlert = new alert({
		name: req.body.name,
		description: req.body.description,
		idCoach: req.body.idCoach,
	})
	newAlert = await newAlert.save()
	if (!newAlert) {
		return res.status(404).send({ Message: 'Error : Enable to create a new alert' })
	}
	res.send(newAlert)
}

const UpdateAlert = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error : Invalid alert Id' })
	}
	const alertToFind = await alert.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
		    description: req.body.description,
		    idCoach: req.body.idCoach,
		},
		{ new: true }
	)
	if (!alertToFind) {
		return res.status(404).send({ Message: 'Error : Enable to update the alert' })
	}
	res.send(alertToFind)
}

const DeleteAlert = (req, res) => {
	alert.findByIdAndRemove(req.params.id)
		.then((alertToDelete) => {
			if (alertToDelete) {
				return res
					.status(200)
					.json({ success: true, Message: 'alert was successfully deleted !' })
			} else {
				return res
					.status(404)
					.json({ success: false, Message: 'Error : Enable to delete the alert' })
			}
		})
		.catch((err) => {
			return res.status(404).json({ success: false, Message: err })
		})
}

module.exports = {
	FindOneAlert,
	FindAlertAll,
	AddNewAlert,
	UpdateAlert,
	DeleteAlert,
}
