const express = require('express')
const router = express.Router()
const {
    getSessionById,
    getSessionsByPlayerId,
    getSessions
} = require("../controllers/session.controller")


router.get('/sessions/:id', getSessionById)
router.get('/sessions/player/:id', getSessionsByPlayerId)
router.get('/sessions', getSessions)
module.exports = router