const {ObjectId} = require("mongoose").Types

const PROGRAMS = [
    {
        _id:ObjectId('5e9f9b9f9b9f9b9f9b9f9b91'),
        title : "Programme Marathon 10KM",
        description : "This program will help you achieve your goal of running 10K marathon",
        link : "http://localhost:8000/files/programme-niv-1.pdf",
        picture : "http://locahost:8000/files/programme-niv-1.jpg",
        idStat : "",
        idComp : ""
    },
    {
        _id:ObjectId('5e9f9b9f9b9f9b9f9b9f9c11'),
        title : "Programme semi-Marathon 21KM",
        description : "This program will help you achieve your goal of running half-marathon",
        link : "http://localhost:8000/files/programme-semi-marathon.pdf",
        picture : "http://locahost:8000/files/programme-semi-marathon-1.jpg",
        idStat : "",
        idComp : ""
    },
    {   
        _id:ObjectId('5e9f9b9f9b9f9b9f9b9f9c21'),
        title : "programme marathon 42KM",
        description : "this program will help you run 42KM marathon",
        link : "http://localhost:8000/files/programme-42km.pdf",
        picture : "http://locahost:8000/files/programme-42km.jpg",
        idStat : "",
        idComp : ""
    },
    {
        _id:ObjectId('5e9f9b9f9b9f9b9f9b9f9c31'),
        title : "programme tennis de table",
        description : "this program tennis de table",
        link : "http://localhost:8000/files/programme-tennis-de-table.pdf",
        picture : "http://locahost:8000/files/programme-tennis-de-table.jpg",
        idStat : "",
        idComp : ""
    },
    {
        _id:ObjectId('5e9f9b9f9b9f9b9f9b9f9c41'),
        title : "programme swimming",
        description : "this program swimming",
        link : "http://localhost:8000/files/programme-swimming.pdf",
        picture : "http://locahost:8000/files/programme-swimming.jpg",
        idStat : "",
        idComp : ""
    
    }
]

module.exports = {
    PROGRAMS
}