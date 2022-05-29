const Session = require('../models/session')
const mongoose = require('mongoose')

const getSessionById = async (req, res) => {
	if (mongoose.isValidObjectId(req.params.id)) {
		try {
			let session = await Session.aggregate([
				{
					$match: {
						$expr: { $eq: ['$_id', { $toObjectId: req.params.id }] },
					},
				},
				{
					$lookup: {
						from: 'players',
						localField: 'idPlayer',
						foreignField: '_id',
						as: 'player',
					},
				},
				{
					$lookup: {
						from: 'coaches',
						localField: 'idCoach',
						foreignField: '_id',
						as: 'coach',
					},
				},
				{
					$lookup: {
						from: 'places',
						localField: 'idPlace',
						foreignField: '_id',
						as: 'place',
					},
				},
				{
					$lookup: {
						from: 'programs',
						localField: 'programId',
						foreignField: '_id',
						as: 'program',
					},
				},
			])
			console.log(req.params.id)
			console.log(session)
			return res.json(session)
		} catch (e) {
			console.log(e)
			return res.json({ error: 'Session not found with id: ' + req.params.id })
		}
	} else {
		return res.json({ error: 'Invalid  Session Id ' + req.params.id })
	}
}

const getSessionsByPlayerId = async (req, res) => {
	if (mongoose.isValidObjectId(req.params.id)) {
		try {
			let session = await Session.aggregate([
				{
					$match: {
						$expr: { $eq: ['$idPlayer', { $toObjectId: req.params.id }] },
					},
				},
				{
					$lookup: {
						from: 'players',
						localField: 'idPlayer',
						foreignField: '_id',
						as: 'player',
					},
				},
				{
					$lookup: {
						from: 'coaches',
						localField: 'idCoach',
						foreignField: '_id',
						as: 'coach',
					},
				},
				{
					$lookup: {
						from: 'places',
						localField: 'idPlace',
						foreignField: '_id',
						as: 'place',
					},
				},
				{
					$lookup: {
						from: 'programs',
						localField: 'programId',
						foreignField: '_id',
						as: 'program',
					},
				},
			])
			console.log(req.params.id)
			console.log(session)
			return res.json(session)
		} catch (e) {
			return res.json({ error: 'Session not found with id: ' + req.params.id })
		}
	} else {
		return res.json({ error: 'Invalid  Session Id ' + req.params.id })
	}
}

// get sessions
const getSessions = async (req, res) => {
	try {
		let sessions = await Session.aggregate([
			{
				$lookup: {
					from: 'players',
					localField: 'idPlayer',
					foreignField: '_id',
					as: 'player',
				},
			},
			{
				$lookup: {
					from: 'coaches',
					localField: 'idCoach',
					foreignField: '_id',
					as: 'coach',
				},
			},
			{
				$lookup: {
					from: 'places',
					localField: 'idPlace',
					foreignField: '_id',
					as: 'place',
				},
			},
			{
				$lookup: {
					from: 'programs',
					localField: 'programId',
					foreignField: '_id',
					as: 'program',
				},
			},
		])
		return res.json(sessions)
	} catch (e) {
		return res.json({ error: 'Error while getting sessions' })
	}
}

module.exports = {
	getSessionById,
	getSessionsByPlayerId,
	getSessions,
}
