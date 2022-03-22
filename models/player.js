const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
	firstname: { type: String, required: false },
	lastname: { type: String, required: false },
	email: { type: String, required: false },
	birthDate: { type: String, required: false },
	picture: { type: String, required: false },
	sex: { type: String, required: false },
	scholar: { type: String, required: false },
	schoolType: { type: String, required: false },
	country: { type: String, required: false },
	tel: { type: Number, required: false },
	sessionPrice: { type: String, required: false },
	height: { type: Number, required: false },
	weight: { type: Number, required: false },
	//IMC:{ type: String, required: false },
	LeftRight: { type: String, required: false },
})

module.exports = mongoose.model('Player', playerSchema)
