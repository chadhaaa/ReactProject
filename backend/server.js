const express = require('express')
const app = express()
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
const CompetencePlayer = require('./models/competencePlayer')
const StatisticPlayer = require('./models/statisticPlayer')
const CompetenceSession = require('./models/competenceSession')
const StatisticSession = require('./models/statisticSession')

// app routes
const routerPlace = require('./routes/place.js')

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

app.listen(8000, () => {
	console.log('Listening on port 8000')
})

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	)
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
	next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// route to crud place
app.use('/api', routerPlace)
