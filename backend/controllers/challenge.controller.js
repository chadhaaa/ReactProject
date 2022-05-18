const mongoose = require('mongoose')
const Challenge = require('../models/challenge')


const FindOneChllg = async (req, res) => {
	const chllgs = await chllg.findOne({ _id: req.params.id })
	if (!chllgs) {
		res.status(500).json({ Message: 'Error : Enable to find challenge' })
	}
	res.send(chllgs)
}

const FindAllChllg = async (req, res) => {
	const challenges = await Challenge.find()
	if (!challenges) {
		res.status(500).json({ Message: 'Error : Enable to find challenges' })
	}
	res.send(challenges)
}


const AddNewChllg = async (req, res) => {
	let newChllg = new chllg({
		link: req.body.link,
		goal: req.body.goal,
		idPlayers: req.body.idPlayers
	})
	newChllg = await newChllg.save()
	if (!newChllg) {
		return res.status(404).send({ Message: 'Error : Enable to create a new challenge' })
	}
	res.send(newChllg)
}


const UpdateChallenge = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error: Competence ID invalid !' })
	}
	const challenge = await Challenge.findOneAndUpdate(
		{ _id: req.params.id },
		{

            link: req.body.link,
            goal: req.body.hour,
            done: req.body.done,
            idPlayers:  req.body.idPlayers,

		},
		{ new: true }
	)
	if (!challenge) {
		return res.status(404).send({ Message: 'ERROR ! ' })
	}
	res.json(challenge)
}

const assignChallengePlayer = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error : Invalid Challenge Id' })
	}
	let chllg = new chllg;
	chllg = await chllg.findByIdAndUpdate(req.params.id,
		{
			
			idPlayers: idPlayers.push(req.body.idPlayers)
		},
		{ new: true }
	)
	if (!chllg) {
		return res.status(404).send({ Message: 'Error : Enable to update the Challenge' })
	}
	res.send(chllg)
}

const DeleteChllg = (req, res) => {
	chllg.findByIdAndRemove(req.params.id)
		.then((chllg) => {
			if (chllg) {
				return res
					.status(200)
					.json({ success: true, Message: 'Challenge was successfully deleted !' })
			} else {
				return res
					.status(404)
					.json({ success: false, Message: 'Error : Enable to delete the Challenge' })
			}
		})
		.catch((err) => {
			return res.status(404).json({ success: false, Message: err })
		})
}




module.exports = {
	FindOneChllg,
	FindAllChllg,
	AddNewChllg,
	UpdateChllg,
	DeleteChllg,
  assignChallengePlayer
}