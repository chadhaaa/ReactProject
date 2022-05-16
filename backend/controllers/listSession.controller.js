const mongoose = require('mongoose')
const Session = require('../models/session')

dateJours=Date.now();

const listSession = async (req,res) => {
    try{
        let result = await Session.find()
        res.status(200).json({ success: true, listeSession: result })
    }catch(e){
        return res.status(404).json({ success: false, Message: err })
    }
}


module.exports = {

	listSession,
	
}