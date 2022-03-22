const mongoose = require('mongoose')

const sessionSchema = mongoose.Schema({
	day: { type: Date, required: false },
	hour: { type: String, required: false },
	cancellation: { type: String, required: false },
	reason: { type: String, required: false },
	feedback: { type: String, required: false },
	idStat: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Stats',
	},
	idComp: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comp',
	},
	idPlayer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Player',
	},
	idCoach: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Coach',
	},
	idPlace: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Place',
	},
})

module.exports = mongoose.model('Session', sessionSchema)
