const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const routerUpdatePlayer = require('./routes/updatePlayer.js')
const routeEvent = require('./routes/event.js')

// app routes
const routerPlace = require('./routes/place.js')
const listSession = require("./routes/listSession")
const routerUpdateCoach = require("./routes/updateCoach")
const routerSignup = require('./routes/signup.js')
// App routes
const routerCompetence = require('./routes/comp.js')
const routerStatistic = require('./routes/statistic.js')
const routerAlert = require('./routes/alert.js')
const morgan = require('morgan')
// App routes
const routesSignup = require('./routes/signup.js')
const routerSessionDetails = require('./routes/sessionDetails.js')
const routerViewProfile = require('./routes/viewProfile.js')
const routerUpdateProfile = require('./routes/updateProfile.js')
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


app.use(morgan("dev"))

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

app.use('/api', routerViewProfile)
app.use('/api', routerUpdateProfile)
app.use(express.static('uploads'))


app.use('/api', routerSessionDetails)

app.use('/api', routerUpdatePlayer)
// Route to Crud Comp and Crud Stat

app.use('/api',routeEvent)

app.use('/api', routerCompetence)
app.use('/api', routerStatistic)
app.use('/api', routerPlace)
app.use('/api',listSession)
app.use('/api',routerAlert)

app.use('/api', routerUpdateCoach)
app.use('/api', routerSignup)




