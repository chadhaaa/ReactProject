const mongoose = require('mongoose')
const { default: session } = require('../../../ProjetRect/frontend/src/components/pages/session/sessionPage')
const Session = require('../../../ProjetRect/backend/models/session')

const AddNewSession = async (req,res) => {
  
    //create new session
    try{
    const sessions = await Session.findById(req.params.id)
			  .populate('idPlace')
        .populate('programId')
        .populate('idPlayer')
        res.send({  
          session: sessions,
      })
      } catch (err) {
          res.send('Error ' + err)
      }
	let newSession = new Session({
        day: req.body.day,
        hour: req.body.hour,
        cancellation: req.body.cancellation,
        reason: req.body.reason,
        feedback: req.body.feedback, 
        idCoach:   
	})
	newSession = await newSession.save()
	if (!newSession) {
		return res.status(404).send({ Message: 'Error : Enable to create a new session' })
	}
	res.json(newSession);
}
module.exports = {
	
	AddNewSession,
	
}