const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
	title: { type: String, required: false },
	description: { type: String, required: false },
	dateDebut: { type: Date, required: false },
	dateFin: { type: Date, required: false },
	hour: { type: String, required: false },
	place: { type: String, required: false },
	visibility: { type: String, required: false },
	idCoach: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Coach',
	},
})

module.exports = mongoose.model('Event', eventSchema)
