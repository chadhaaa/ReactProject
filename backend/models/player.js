const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
	firstname: { type: String, required: false },
	lastname: { type: String, required: false },
	password: { type: String, required: false },
	email: { type: String, required: false },
	birthDate: { type: String, required: false },
	picture: { type: String, required: false },
	sex: { type: String, required: false },
	scholar: { type: String, required: false },
	schoolType: { type: String, required: false },
	country: { type: String, required: false },
	tel: { type: Number, required: false },
	height: { type: Number, required: false },
	weight: { type: Number, required: false },
	LeftRight: { type: String, required: false },
	goal: { type: String, required: false },
	coachId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coach' },
	sessionPrice: { type: Number, required: false },
	sessionNumbers: { type: Number, required: false },
	password: { type: String, required: true },
	active: { type: Boolean, required: false },

})

module.exports = mongoose.model('Player', playerSchema)
