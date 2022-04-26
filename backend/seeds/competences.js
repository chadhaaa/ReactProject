const {ObjectId} = require("mongoose").Types
const COMPETENCES = [
    {
        _id: ObjectId('5e9f9b9f9b9f9b9f9b9f9c11'),
        name: 'Running',
        description: 'This program will help you achieve your goal of running 10K marathon',
        link: 'http://localhost:8000/files/programme-niv-1.pdf',
        visbility: true,
    } ,
    {
        _id: ObjectId('5e9f9b9f9b9f9b9f9b9f9d11'),
        name: 'Tennis',
        description: 'Tennis de table',
        link: 'http://localhost:8000/files/programme-tennis-de-table.pdf',
        visbility: true,
    },
    {
        _id: ObjectId('5e9f9b9f9b9f9b9f9b9f9d21'),
        name: 'Swimming',
        description: 'Swimming pool',
        link: 'http://localhost:8000/files/programme-swimming.pdf',
        visbility: true,
    }

]
module.exports = {
    COMPETENCES
}