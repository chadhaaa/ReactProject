const mongoose = require('mongoose')
const session = require('../models/session')
const Place = require("../models/Place");
const StatSession = require("../models/statisticSession");
const CompSession = require("../models/competenceSession");


const AddNewSession = async (req,res) => {
    //create new place
    let newPlace= new Place({
        Name: req.body.Name, 
        countryState: req.body.countryState,
        country: req.body.country,
        address: req.body.address, 
    }) 
    newPlace = await newPlace.save()
	if (!newPlace) {
		return res.status(404).send({ Message: 'Error : Enable to create a new place' })
	}
    //create new session
	let newSession = new session({
		day: req.body.day,
		hour: req.body.hour,
        idPlayer: req.body.idPlayer,
        programId: req.body.programId,
        idPlace: newPlace._id
	})
	newSession = await newSession.save()
	if (!newSession) {
		return res.status(404).send({ Message: 'Error : Enable to create a new session' })
	}

    //create new statisticSession
    Array.from(req.body.stats).forEach((stats) => {
    let statsSession = new StatSession({
      statId: stats,
      seanceId: session._id,
    });
    statsSession= await statsSession.save()
    if (!statsSession) {
		return res.status(404).send({ Message: 'Error : Enable to create a new statistic session' })
    }
    });
    //create new statisticSession
    Array.from(req.body.comp).forEach((comp) => {
    let compsSession = new CompSession({
      compId: comp,
      seanceId: session._id,
    });
    compsSession= await CompSession.save()
    if (!compsSession) {
		return res.status(404).send({ Message: 'Error : Enable to create a new competence session' })
    }
  });

	res.json(newSession);
}
module.exports = {
	
	AddNewSession,
	
}