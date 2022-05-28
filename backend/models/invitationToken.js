const mongoose = require('mongoose')

const invitationTokenSchema = mongoose.Schema(
	{
		token: { type: String, required: false },
		playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
		coachId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Coach',
		},
		expires: { type: Date, required: false },
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('InvitationToken', invitationTokenSchema)
