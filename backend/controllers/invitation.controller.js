const mongoose = require("mongoose");
const invitationToken = require("../models/invitationToken");
const Player = require("../models/player");
const Coach = require("../models/coach");
const uuid = require("uuid");

// handle invitation request


module.exports = {
    acceptInvitationRequest: async (req, res) => {
        const t = req.params.token;
        
        try{
            const token = await invitationToken.aggregate([
				{
					$match: {
						token: t, 
					},
				},
				{
					$lookup: {
						from: 'players',
						localField: 'playerId',
						foreignField: '_id',
						as: 'player',
					},
				},
				{
					$lookup: {
						from: 'coaches',
						localField: 'coachId',
						foreignField: '_id',
						as: 'coach',
					},
				},
            ])
            if(!token){
                return res.status(404).json({
                    message: "Invitation token not found"
                });
            }
            if(token.expires < Date.now()){
                return res.status(400).json({
                    message: "Invitation token expired"
                });
            }
            return res.status(200).json({
                message: "Invitation token accepted",
                coach: token[0].coach[0],
                player : token[0].coach[0],
            });
        }
        catch(err){
            console.log(err)
            return res.status(500).json({
                message: "Server error"
            });

        }
    },

    createInvitationToken: async (req, res) => {
        console.log(req.body)
        const playerId = req.body.playerId;
        const coachId = req.body.coachId;
        console.log(playerId + " " + coachId + " : player id")
        const player = await Player.findOne({ $match: {  $expr: { $eq: ['$_id', { $toObjectId: playerId }] }  } }); 
        const coach = await Coach.findOne({ $match: {  $expr: { $eq: ['$_id', { $toObjectId: coachId }] }  } }); 
        console.log(player)
        console.log(coach)
        try{
           
            const token = new invitationToken({
                token: uuid.v4(),
                playerId: mongoose.Types.ObjectId(playerId),
                coachId: mongoose.Types.ObjectId(coachId) ,
                expires: Date.now() + 3600000
            });
            await token.save();
            return res.status(200).json({
                message: "Invitation token created",
                token: token.token
            });
        }
        catch(err){
            return res.status(500).json({
                message: "Server error"
            });
        }
    }
}
