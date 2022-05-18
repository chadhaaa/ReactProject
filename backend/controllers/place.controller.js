const mongoose = require('mongoose')
const Place = require('../models/place')

const FindOnePlace = async (req, res) => {
	const Places = await Place.findOne({ _id: req.params.id })
	if (!Places) {
		res.status(500).json({ Message: 'Error : Enable to find Place' })
	}
	res.send(Places)
}

const FindPlaceAll = async (req, res) => {
	const Places = await Place.find()
	if (!Places) {
		res.status(500).json({ Message: 'Error : Enable to find Place' })
	}
	res.send(Places)
}

const AddNewPlace = async (req, res) => {
	let newPlace = new Place({

		
		Name: req.body.name,
		countryState: req.body.countryState,
		country: req.body.country,
		address: req.body.address,
	})
	newPlace = await newPlace.save()
	if (!newPlace) {
		return res.status(404).send({ Message: 'Error : Enable to create a new Place' })
	}
	res.send(newPlace)
}

const UpdatePlace = async (req, res) => {
	if (!mongoose.isValidObjectId(req.params.id)) {
		res.status(400).send({ Message: 'Error : Invalid Place Id' })
	}
	const Place = await Place.findByIdAndUpdate(
		req.params.id,

		{
			
			Name: req.body.Name,
			countryState: req.body.countryState,
			country: req.body.country,
			address: req.body.address,
		},
		{ new: true }
	)
	if (!place) {
		return res.status(404).send({ Message: 'Error : Enable to update the Place' })
	}
	res.send(place)
}

const DeletePlace = (req, res) => {
	Place.findByIdAndRemove(req.params.id)
		.then((place) => {
			if (place) {
				return res
					.status(200)
					.json({ success: true, Message: 'Place was successfully deleted !' })
			} else {
				return res
					.status(404)
					.json({ success: false, Message: 'Error : Enable to delete the Place' })
			}
		})
		.catch((err) => {
			return res.status(404).json({ success: false, Message: err })
		})
}

module.exports = {
	FindOnePlace,
	FindPlaceAll,
	AddNewPlace,
	UpdatePlace,
	DeletePlace,
}

