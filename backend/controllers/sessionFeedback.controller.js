const mongoose = require('mongoose')

const Coach = require('../models/session')

const UpdateSessionFeedback = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error: session ID invalid !' })
	}
	const session = await Coach.findOneAndUpdate(
		{ _id: req.params.id },
		{
            day: req.body.day,
            hour: req.body.hour,
            cancellation: req.body.cancellation,
            reason:  req.body.reason,
            feedback:  req.body.feedback,
            idPlayer:  req.body.idPlayer,
            idCoach:  req.body.idCoach,
            idPlace:req.body.idPlace,
            programId:req.body.programId,
		},
		{ new: true }
	)


	if (!session) {
		return res.status(404).send({ Message: 'ERROR ! ' })
	}
	res.json(session)
}



module.exports = {
	UpdateSessionFeedback,
}

