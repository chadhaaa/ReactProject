const express = require('express')
const app = express()
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

// send EMAIL REMINDER to coach and player
const cron = require('node-cron')
const mailer = require('nodemailer')

const currentDate = new Date().toString().split(' ')

let cYear = currentDate[3]
let cMonth = currentDate[1]
let cDay = currentDate[2]

var transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'nodeisamm@gmail.com',
		pass: 'otaku666',
	},
})

// Send Email Every Wednesday
cron.schedule('* * * * * 3', () => {
	const sendEmailRemainder = Session.find({}, (err, dates) => {
		dates.forEach((element) => {
			let d = element.day.toString().split(' ')
			if (d[2] === cDay && d[1] === cMonth && d[3] === cYear) {
				const mailOptions = {
					from: 'nodeisamm@gmail.com',
					to: 'chadha.hadji@gmail.com',
					subject: `Fitness App Email Reminder `,
					html: `We remind you that there is an upcoming session </b> at ${element.hour} , Enjoy !`,
				}
				return transporter.sendMail(mailOptions, (error, data) => {
					if (error) {
						console.log(error)
						return
					} else {
						console.log('Email successfully sent!')
					}
				})
			}
		})
	})
})
