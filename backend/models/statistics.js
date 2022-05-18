const mongoose = require('mongoose')

const statSchema = mongoose.Schema({
	type: { type: Array, required: false },
	unit: { type: Array, required: false },
	title: { type: String, required: false },
	description: { type: String, required: false },
	link: { type: String, required: false },
	visibility: { type: Boolean, required: false },
	currentState: { type: Number, required: false },
	minMax: { type: Array, required: false },
	statAlert: { type: Boolean, required: false },
	disciplineId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Discipline',
	},
})

module.exports = mongoose.model('Stats', statSchema)
