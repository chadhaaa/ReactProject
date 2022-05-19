const express = require('express')
const router = express.Router()
const {
	FindOnePlace,
	FindAllPlaces,
	AddNewPlace,
	UpdatePlace,
	DeletePlace
} = require('../controllers/place.controller')

router.get('/place/:id', FindOnePlace)

router.get('/places', FindAllPlaces)

router.post('/place', AddNewPlace)

router.put('/place/:id', UpdatePlace)

router.delete('/place/:id', DeletePlace)

module.exports = router