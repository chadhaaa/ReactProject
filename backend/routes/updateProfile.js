const express = require('express')
const router = express.Router()

const profile = require('../controllers/updateProfile.controller')
router.put(
	'/UpdateProfilePlayer/:id',
	profile.upload.single('picture'),
	profile.UpdateProfile
)

module.exports = router
