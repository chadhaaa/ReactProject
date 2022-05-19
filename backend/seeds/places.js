const {ObjectId} = require("mongoose").Types

const PLACES = [
    {
        _id : ObjectId('5e9f9b9f9b9f9b9f9b9f9e91'),
        country: 'Tunisia',
        countryState: 'Tunis',
        address: 'avenue habib bourguiba, 1, 2000 Tunis',
    },
    {
        _id : ObjectId('5e9f9b9f9b9f9b9f9b9f9ba1'),
        country: 'Tunisia',
        countryState: 'Ariana',
        address: 'avenue habib bourguiba, 2, 3000 Ariana',
    },
    {
        _id : ObjectId('5e9f9b9f9b9f9b9f9b9f9bb1'),
        country: 'Tunisia',
        countryState: 'Ariana',
        address: 'avenue habib bourguiba, 3, 4000 Ariana',
    },
    {
        _id : ObjectId('5e9f9b9f9b9f9b9f9b9f9bc1'),
        country: 'Tunisia',
        countryState: 'Sfax',
        address: 'avenue habib bourguiba, 4, 5000 Sfax',
    }
]
module.exports = {
    PLACES
}