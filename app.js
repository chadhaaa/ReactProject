const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

const createError = require('http-errors')

app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	)
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
	next()
})

// Error Handling
app.use((req, res, next) => {
	next(createError(404))
})
app.use(function (err, req, res, next) {
	console.error(err.message)
	if (!err.statusCode) err.statusCode = 500
	res.status(err.statusCode).send(err.message)
})

module.exports = app
