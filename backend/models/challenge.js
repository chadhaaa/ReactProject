const mongoose = require('mongoose')

const challengeSchema = mongoose.Schema({
	link: { type: String, required: false },
	goal: { type: String, required: false },
	idPlayers: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Player',
	},
})

module.exports = mongoose.model('Challenge', challengeSchema)
