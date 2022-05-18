const mongoose = require('mongoose')

const compSchema = mongoose.Schema({
	name: { type: String, required: false },
	description: { type: String, required: false },
	link: { type: String, required: false },
	visibility: { type: Boolean, required: false },
	stars: { type: Number, required: false },
})

module.exports = mongoose.model('Comp', compSchema)
