const mongoose = require('mongoose')

const coachSchema = mongoose.Schema({
	firstname: { type: String, required: false },
	lastname: { type: String, required: false },
	email: { type: String, required: false },
	birthDate: { type: String, required: false },
	photo: { type: String, required: false },
	sex: { type: String, required: false },
})

module.exports = mongoose.model('Coach', coachSchema)
