const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

const routerPlace = require('./routes/place.js')
const routerCompetence = require('./routes/comp.js')
const routerStatistic = require('./routes/statistic.js')


// Database connection
mongoose
  .connect(
    "mongodb+srv://REACT:react@reactproject.axphx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.use(morgan("dev"))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});



app.use("/listSession", routeListSession);
app.use("/api", routeSession);
app.use("/api", routeChallenge);
app.use('/api', routerCompetence)
app.use('/api', routerStatistic)
app.use('/api', routerPlace)


