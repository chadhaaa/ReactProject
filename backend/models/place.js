	const mongoose = require('mongoose')

const placeSchema = mongoose.Schema({
	Name: { type: String, required: false },
	countryState: { type: String, required: false },
	country: { type: String, required: false },
	address: { type: String, required: false },
})

module.exports = mongoose.model('Place', placeSchema)
