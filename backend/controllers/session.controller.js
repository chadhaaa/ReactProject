const Session = require('../models/session');
const mongoose = require("mongoose");

const getSessionById = async (req, res) => {
    if (mongoose.isValidObjectId(req.params.id)) {
        try{
            let session = await Session.find({_id : req.params.id});
            console.log(req.params.id)
            console.log(session)
            return res.json(session);

        }catch(e){
            return res.json({error: "Session not found with id: " + req.params.id});
        }
       
    }
    else {
        return res.json({error: "Invalid  Session Id " + req.params.id});
    }
}

const getSessionsByPlayerId = async (req,res)=>{
    if (mongoose.isValidObjectId(req.params.id)) {
        try{
            let session = await Session.find({idPlayer : req.params.id});
            console.log(req.params.id)
            console.log(session)
            return res.json(session);

        }catch(e){
            return res.json({error: "Session not found with id: " + req.params.id});
        }
       
    }
    else {
        return res.json({error: "Invalid  Session Id " + req.params.id});
    }
}

// get sessions
const getSessions = async (req, res) => {
    try {
        let sessions = await Session.find({});
        return res.json(sessions);
    } catch (e) {
        return res.json({ error: "Error while getting sessions" });
    }
}

module.exports = {
    getSessionById,
    getSessionsByPlayerId,
    getSessions
}