const mongoose = require('mongoose')
const place = require('../models/place.js')

const FindOnePlace = async (req, res) => {
	const placeToFind = await place.findOne({ _id: req.params.id })
	if (!placeToFind) {
		res.status(500).json({ Message: 'Error : Enable to find program' })
	}

	res.json(placeToFind)
}

const FindAllPlaces = async (req, res) => {
	
	const places = await place.find()
	if (!places) {
		res.status(500).json({ Message: 'Error : Enable to find programs' })
	}
	res.json(places)
}

const AddNewPlace = async (req, res) => {
	let newPlace = new place({
		Name: req.body.Name,
		countryState: req.body.countryState,
		country: req.body.country,
		address: req.body.address,
	})
	newPlace = await newPlace.save()
	if (!newPlace) {
		return res.status(404).send({ Message: 'Error : Enable to create a new program' })
	}
	res.json(newPlace)
}

const UpdatePlace = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error : Invalid program Id' })
	}
	const placeTopUpdate = await place.findByIdAndUpdate(req.params.id,
		{
			Name: req.body.Name,
			countryState: req.body.countryState,
			country: req.body.country,
			address: req.body.address,
		},
		{ new: true }
	)
	if (!placeTopUpdate) {
		return res.status(404).send({ Message: 'Error : Enable to update the program' })
	}
	res.json(placeTopUpdate)
}

const DeletePlace = (req, res) => {
	place.findByIdAndRemove(req.params.id)
		.then((placeToDelete) => {
			if (placeToDelete) {
				return res
					.status(200)
					.json({ success: true, Message: 'program was successfully deleted !' })
			} else {
				return res
					.status(404)
					.json({ success: false, Message: 'Error : Enable to delete the program' })
			}
		})
		.catch((err) => {
			return res.status(404).json({ success: false, Message: err })
		})
}

module.exports = {
	FindOnePlace,
	FindAllPlaces,
	AddNewPlace,
	UpdatePlace,
	DeletePlace
}