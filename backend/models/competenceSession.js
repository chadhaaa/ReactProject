const mongoose = require('mongoose')

const compSeanceSchema = mongoose.Schema({
	compId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comp' },
	seanceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
})
module.exports = mongoose.model('CompSeance', compSeanceSchema)
