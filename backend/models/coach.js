const mongoose = require('mongoose')

const coachSchema = mongoose.Schema({
	firstname: { type: String, required: false },
	lastname: { type: String, required: false },
	password: { type: String, required: false },
	email: { type: String, required: false },
	birthDate: { type: String, required: false },
	photo: { type: String, required: false },
	sex: { type: String, required: false },
	new: { type: Boolean, required: false, default:true },
	alerts: { type: [String], required: false, default:[] },
	discipline: { type: String, required: false, default:'' },
})

module.exports = mongoose.model('Coach', coachSchema)
