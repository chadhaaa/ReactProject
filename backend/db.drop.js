const MongoClient = require('mongodb').MongoClient


const connectDb = async () => {
  const uri = 	'mongodb+srv://REACT:react@reactproject.axphx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  const client = new MongoClient(uri)
  return await client.connect()
}

connectDb().then(async (mongo) => {
    const programCollection = mongo.db('myFirstDatabase').collection('programs')
   
    console.log('connected to Mongodb 🥭 -- seeding db')

    console.log('🌱 Dropping program collection 🍀')
    await programCollection.deleteMany()
  
    await mongo.close()
})