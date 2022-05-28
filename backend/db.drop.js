const MongoClient = require('mongodb').MongoClient


const connectDb = async () => {
  const uri = 	'mongodb+srv://REACT:react@reactproject.axphx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  const client = new MongoClient(uri)
  return await client.connect()
}

connectDb().then(async (mongo) => {
    const programCollection = mongo.db('myFirstDatabase').collection('programs')
    const playerCollection = mongo.db('myFirstDatabase').collection('players')
    const coachesCollection = mongo.db('myFirstDatabase').collection('coaches')
    const sessionCollection = mongo.db('myFirstDatabase').collection('sessions')
    const placeCollection = mongo.db('myFirstDatabase').collection('places')
    const competenceCollection = mongo.db('myFirstDatabase').collection('competences')

    console.log('connected to Mongodb 🥭 -- seeding db')

    console.log('🌱 Dropping program collection 🍀')
    await programCollection.deleteMany()

    console.log('🌱 Dropping player collection 🍀')
    await playerCollection.deleteMany()

    console.log('🌱 Dropping coach collection 🍀')
    await coachesCollection.deleteMany()

    console.log('🌱 Dropping session collection 🍀')
    await sessionCollection.deleteMany()

    console.log('🌱 Dropping place collection 🍀')
    await placeCollection.deleteMany()

    console.log('🌱 Dropping competence collection 🍀')
    await competenceCollection.deleteMany()

    console.log('🌱 🍀')

    await mongo.close()
})