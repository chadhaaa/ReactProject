const mongoose = require('mongoose')

const alertSchema = mongoose.Schema({
	name: { type: String, required: false },
	description: { type: String, required: false },
	idCoach: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Coach',
	},
	type: { type: String, required: false },
})

module.exports = mongoose.model('Alert', alertSchema)
