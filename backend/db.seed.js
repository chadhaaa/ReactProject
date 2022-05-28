const { PROGRAMS } = require("./seeds/programs");
const { SESSIONS } = require("./seeds/sessions");
const { PLACES} = require("./seeds/places");
const {PLAYERS } = require("./seeds/players");
const {COACHES } = require("./seeds/coaches");
const { COMPETENCES } = require("./seeds/competences");


const MongoClient = require('mongodb').MongoClient


const connectDb = async () => {
  const uri = 	'mongodb+srv://REACT:react@reactproject.axphx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  const client = new MongoClient(uri)
  return await client.connect()
}

connectDb().then(async (mongo) => {
    const programCollection = mongo.db('myFirstDatabase').collection('programs')
   
    console.log('connected to Mongodb 🥭 -- seeding db')

    console.log('🌱 Seeding Program collection 🍀')
    const { insertedIds } = await programCollection.insertMany(PROGRAMS)
    console.log('🌱 Seeding Program collection Success 🍀')
    console.log('🌱 🍀')
    console.log({insertedIds})
    console.log('🌱 🍀')

    await mongo.close()
})
connectDb().then(async (mongo) => {
  const programCollection = mongo.db('myFirstDatabase').collection('coaches')
 
  console.log('connected to Mongodb 🥭 -- seeding db')
 
 
  console.log('🌱 Seeding Coaches collection 🍀')
  const { insertedIds } = await programCollection.insertMany(COACHES)
  console.log('🌱 Seeding Coaches collection Success 🍀')
  console.log('🌱 🍀')
  console.log({insertedIds})
  console.log('🌱 🍀')

  await mongo.close()
})
connectDb().then(async (mongo) => {
  const programCollection = mongo.db('myFirstDatabase').collection('places')
 
  console.log('connected to Mongodb 🥭 -- seeding db')
 
 
  console.log('🌱 Seeding Places collection 🍀')
  const { insertedIds } = await programCollection.insertMany(PLACES)
  console.log('🌱 Seeding Places collection Success 🍀')
  console.log('🌱 🍀')
  console.log({insertedIds})
  console.log('🌱 🍀')
  await mongo.close()
})


connectDb().then(async (mongo) => {
  const programCollection = mongo.db('myFirstDatabase').collection('players')
 
  console.log('connected to Mongodb 🥭 -- seeding db')
 
 
  console.log('🌱 Seeding Players collection 🍀')
  const { insertedIds } = await programCollection.insertMany(PLAYERS)
  console.log('🌱 Seeding Players collection Success 🍀')
  console.log('🌱 🍀')
  console.log({insertedIds})
  console.log('🌱 🍀')

  await mongo.close()
})

connectDb().then(async (mongo) => {
  // seed session model 
  const sessionCollection = mongo.db('myFirstDatabase').collection('competences')
  console.log('connected to Mongodb 🥭 -- seeding db')
  console.log('🌱 Seeding Competences collection 🍀')
  const { insertedIds } = await sessionCollection.insertMany(COMPETENCES)
  console.log('🌱 Seeding Competences collection Success 🍀')
  console.log('🌱 🍀')
  
  await mongo.close()
})

connectDb().then(async (mongo) => {
  // seed session model 
  const sessionCollection = mongo.db('myFirstDatabase').collection('sessions')
  console.log('connected to Mongodb 🥭 -- seeding db')
  console.log('🌱 Seeding Session collection 🍀')
  const { insertedIds } = await sessionCollection.insertMany(SESSIONS)
  console.log('🌱 Seeding Session collection Success 🍀')
  console.log('🌱 🍀')
  
  await mongo.close()
})


