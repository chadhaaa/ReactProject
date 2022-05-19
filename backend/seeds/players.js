const {ObjectId} = require("mongoose").Types

const PLAYERS =[
    {
        _id : ObjectId('5e9f9b9f9b9f9b9f9b9f9e11'),
        firstName: 'oussema',
        lastName: 'mallouli',
        email: 'mallouli@player.com',
        password:'12345678',
        phone: '',
        birthDate: '22/04/1990',
        coachId :ObjectId('5e9f9b9f9b9f9b9f9b9f9f31')

    },
    {
        _id : ObjectId('5e9f9b9f9b9f9b9f9b9f9e21'),
        firstName: 'Mohamed',
        lastName: 'Gammoudi',
        email: 'gammoudi@player.com',
        password:'12345678',
        phone: '',
        birthDate: '22/04/1950',
        coachId :ObjectId('5e9f9b9f9b9f9b9f9b9f9f11')
    },
    {
        _id : ObjectId('5e9f9b9f9b9f9b9f9b9f9e31'),
        firstName: 'Ons',
        lastName: 'jabeur',
        email: 'jabeur@player.com',
        password:'12345678',
        phone: '',
        birthDate: '22/04/1980',
        coachId :ObjectId('5e9f9b9f9b9f9b9f9b9f9f21')
    }
]
module.exports = {
    PLAYERS
}
