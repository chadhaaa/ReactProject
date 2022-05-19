const express = require('express')
const router = express.Router()
const {
    UpdateSessionFeedback,
	
} = require('../controllers/sessionFeedback.controller')



router.put('/sessionFeedback/:id', UpdateSessionFeedback)


module.exports = router