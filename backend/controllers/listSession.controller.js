const mongoose = require('mongoose')
const Session = require('../models/session')

dateJours=Date.now();
const listSession = async (req,res) => {
    Session.find()
    .then((result)=>{
        if(result.day == dateJours){
            return res
					.status(200)
					.json({ success: true, listeSession: result });
        }
    })
    .catch((err) => {
        return res.status(404).json({ success: false, Message: err })
    })

}
module.exports = {
	
	listSession,
	
}