const mongoose = require('mongoose')

const disciplineSchema = mongoose.Schema({
	typeDiscipline: { type: String, required: false },
})

module.exports = mongoose.model('Discipline', disciplineSchema)
