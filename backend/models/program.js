const mongoose = require('mongoose')

const progSchema = mongoose.Schema({
	title: { type: String, required: false },
	description: { type: String, required: false },
	link: { type: String, required: false },
	picture: { type: String, required: false },
	// coachId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coach' },
	// idStat: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Stats',
	// },
	// idComp: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Comp',
	// },
})

module.exports = mongoose.model('Prog', progSchema)
