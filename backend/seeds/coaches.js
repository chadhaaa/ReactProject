const {ObjectId} = require("mongoose").Types

const COACHES = [
    {
        id: ObjectId('5e9f9b9f9b9f9b9f9b9f9f11'),
        firstName: 'running',
        lastName: 'coach',
        email: 'running@coach.com',
        password : '12345678',
        birthDate: '01/01/2000',
    },
    {
        id: ObjectId('5e9f9b9f9b9f9b9f9b9f9f21'),
        firstName: 'tennis',
        lastName: 'coach',
        email: 'tennis@coach.com',
        password : '12345678',
        birthDate: '01/01/1999',
    },
    {
        id: ObjectId('5e9f9b9f9b9f9b9f9b9f9f31'),
        firstName: 'swimming',
        lastName: 'coach',
        email: 'swimming@coach.com',
        password : '12345678',
        birthDate: '01/01/1998',
    }
]

module.exports = {
    COACHES
}