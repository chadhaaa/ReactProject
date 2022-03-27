const express = require('express')
const app = require('./app')
const http = require('http')
const mongoose = require('mongoose')

// Adding tables to database
const Coach = require('./models/coach')
const Player = require('./models/player')
const Stats = require('./models/statistics')
const Comp = require('./models/competence')
const Alert = require('./models/alert')
const Challenge = require('./models/challenge')
const Event = require('./models/event')
const Place = require('./models/place')
const Program = require('./models/program')
const Session = require('./models/session')
const Subscription = require('./models/subscription')
const Discipline = require('./models/discipline')
const routerUpdatePlayer = require("./routes/updatePlayer.js");

// Database connection
mongoose
	.connect(
		'mongodb+srv://REACT:react@reactproject.axphx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'))

const server = http.createServer(app)

server.listen(8000, () => {
	console.log('Listening on port 8000')
})

app.use("/api", routerUpdatePlayer);