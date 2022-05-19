const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

	password: { type: String, required: false },
	email: { type: String, required: false },
	role: { type: String, required: false },
	playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
	coachId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coach' },

    
})

module.exports = mongoose.model('User', userSchema)
