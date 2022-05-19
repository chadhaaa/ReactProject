const mongoose = require('mongoose')
const Event = require('../models/event')

const FindOneEvent = async (req, res) => {
	const events = await Event.findOne({ _id: req.params.id }).populate('idCoach')
	if (!events) {
		res.status(500).json({ Message: 'Error : Enable to find event' })
	}
	res.send(events)
}

const FindAllEvents = async (req, res) => {
	const events = await Event.find()
	if (!events) {
		res.status(500).json({ Message: 'Error : Enable to find events' })
	}
	res.send(events)
}

const AddNewEvent = async (req, res) => {
	let newEvent = new Event({
		title: req.body.title,
		description: req.body.description,
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        hour: req.body.hour,
        place: req.body.place,
        visibility: req.body.visibility,
        idCoach: req.body.idCoach,
	})
	newEvent = await newEvent.save()
	if (!newEvent) {
		return res.status(404).send({ Message: 'Error : Enable to create a new event' })
	}
	res.send(newEvent)
}

const UpdateEvent = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error : Invalid event Id' })
	}
	const event = await Event.findByIdAndUpdate(req.params.id,
		{
		title: req.body.title,
		description: req.body.description,
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        hour: req.body.hour,
        place: req.body.place,
        visibility: req.body.visibility,
        idCoach: req.body.idCoach,
		},
		{ new: true }
	)
	if (!event) {
		return res.status(404).send({ Message: 'Error : Enable to update the event' })
	}
	res.send(event)
}

const DeleteEvent = (req, res) => {
	Event.findByIdAndRemove(req.params.id)
		.then((Event) => {
			if (Event) {
				return res
					.status(200)
					.json({ success: true, Message: 'Event was successfully deleted !' })
			} else {
				return res
					.status(404)
					.json({ success: false, Message: 'Error : Enable to delete the event' })
			}
		})
		.catch((err) => {
			return res.status(404).json({ success: false, Message: err })
		})
}

module.exports = {
	FindOneEvent,
	FindAllEvents,
	AddNewEvent,
	UpdateEvent,
	DeleteEvent
}