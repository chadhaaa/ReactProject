const express = require('express')
const app = express()
const env = require('dotenv').config({path: './.env'});

const mongoose = require('mongoose')
const cors = require('cors')

const routerUpdatePlayer = require('./routes/updatePlayer.js')
const routeEvent = require('./routes/event.js')
const routerPlayerProfileByCoach = require('./routes/playerProfileCoach')

// app routes
const routerPlace = require('./routes/place.js')
const listSession = require("./routes/listSession")
const routerUpdateCoach = require("./routes/updateCoach")
const routerUpdateSession = require("./routes/sessionCancel")
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
const routerInviterPlayer = require('./routes/invitePlayer.js')
const routerLogin = require('./routes/login')


//App routes
const routeChallenge = require('./routes/challenge.js')


// sayed routes 


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// routes
const routeProgram = require('./routes/program.route.js')
const planRoute = require('./routes/plan.route.js');
const sessionRoute = require('./routes/sessions.route');
const invitationRoute = require('./routes/invitation.route');
// preparing webhook for stripe 
app.use(
	express.json({
	  // We need the raw body to verify webhook signatures.
	  // Let's compute it only when hitting the Stripe webhook endpoint.
	  verify: function (req, res, buf) {
		if (req.originalUrl.startsWith('/webhook')) {
		  req.rawBody = buf.toString();
		}
	  },
	})
  );


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


app.use('/api',routeChallenge)

app.use('/api', routerInviterPlayer)

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
app.use('/api', routerUpdateSession)
app.use('/api', routerSignup)

app.use('/api', routerLogin)

app.use('/api', routerPlayerProfileByCoach)

// sayed routes 
app.use('/api',routeProgram)
app.use('/api',planRoute)
app.use('/api',sessionRoute)
app.use('/api/invitation',invitationRoute)
// stripe routes 
app.get('/config', (req, res) => {
	res.send({
	  publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
	});
});

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  console.log(amount)
  
  const params = {
    payment_method_types: ["card"],
    amount: amount,
    currency: 'usd',
  }
  
  
  try {
    const paymentIntent = await stripe.paymentIntents.create(params);

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
      nextAction: paymentIntent.next_action,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

// Expose a endpoint as a webhook handler for asynchronous events.
// Configure your webhook in the stripe developer dashboard
// https://dashboard.stripe.com/test/webhooks
app.post('/webhook', async (req, res) => {
  let data, eventType;

  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // we can retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'payment_intent.succeeded') {
    // Funds have been captured
    // Fulfill any orders, e-mail receipts, etc
    // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
    console.log('💰 Payment captured!');
  } else if (eventType === 'payment_intent.payment_failed') {
    console.log('❌ Payment failed.');
  }
  res.sendStatus(200);
});





