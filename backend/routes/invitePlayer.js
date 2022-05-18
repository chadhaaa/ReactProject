const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const cors = require('cors')
const { invitePlayer } = require('../controllers/inviterPlayer.controller')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use(cors())

router.post('/players', invitePlayer)

module.exports = router
