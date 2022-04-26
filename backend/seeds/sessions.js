const {ObjectId}  = require("mongoose").Types;
const SESSIONS = [
    {
        day:'2022-04-27',
        hour:'8pm',
        cancellation:'',
        reason:'',
        feedback:'',
        idPlayer:ObjectId('5e9f9b9f9b9f9b9f9b9f9e31'),
        idCoach:ObjectId('5e9f9b9f9b9f9b9f9b9f9f21'),
        idPlace:ObjectId('5e9f9b9f9b9f9b9f9b9f9e91'),
        programId:ObjectId('5e9f9b9f9b9f9b9f9b9f9c31')
    },
    {
        day:'2022-04-28',
        hour:'9pm',
        cancellation:'',
        reason:'',
        feedback:'',
        idPlayer:ObjectId('5e9f9b9f9b9f9b9f9b9f9e11'),
        idCoach:ObjectId('5e9f9b9f9b9f9b9f9b9f9f31'),
        idPlace:ObjectId('5e9f9b9f9b9f9b9f9b9f9ba1'),
        programId:ObjectId('5e9f9b9f9b9f9b9f9b9f9c41')
    },
    {
        day:'2022-04-29',
        hour:'',
        cancellation:'',
        reason:'',
        feedback:'',
        idPlayer:ObjectId('5e9f9b9f9b9f9b9f9b9f9e21'),
        idCoach:ObjectId('5e9f9b9f9b9f9b9f9b9f9f11'),
        idPlace:ObjectId('5e9f9b9f9b9f9b9f9b9f9bb1'),
        programId:ObjectId('5e9f9b9f9b9f9b9f9b9f9c21')
    }
]

module.exports = {
    SESSIONS
}