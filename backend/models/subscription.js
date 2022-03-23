const mongoose = require('mongoose')

const subsSchema = mongoose.Schema({
	title: { type: String, required: false },
	subscriptionPlan: { type: String, required: false },
	idCoach: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Coach',
	},
})

module.exports = mongoose.model('Subscription', subsSchema)
