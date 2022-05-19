const mongoose = require('mongoose')
const Event = require('../models/event')


const FindEventOne = async (req, res) => {
	try {
		const events = await Event.findById(req.params.id)
			.populate('idCoach')
		res.send({
			event: events,
		})
	} catch (err) {
		res.send('Error ' + err)
	}
}

const FindAllEvents = async (req, res) => {
	const events = await Event.find()
	if (!events) {
		res.status(500).json({ Message: 'Error : Cannot find any events!' })
	}
	res.send(events)
}

module.exports = {
	FindAllEvents,
	FindEventOne,
}