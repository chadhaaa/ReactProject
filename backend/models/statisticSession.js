const mongoose = require('mongoose')

const statSeanceSchema = mongoose.Schema({
	statId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stats' },
	seanceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
})
module.exports = mongoose.model('StatSeance', statSeanceSchema)
