const mongoose = require('mongoose')
const subscription = require('../models/subscription.js')




const convertDollarToCent = ( centAmount )=>{
    return centAmount * 100
}
const getPriceByPlanName = async (req, res) => {
   
	const plan = req.params.plan;
    switch(plan){
        case 'free':
            res.json({price:convertDollarToCent(0)});
            break;
        case 'basic':
            res.json({price:convertDollarToCent(49)});
            break;
        case 'premium':
            res.json({price:convertDollarToCent(99)});
            break;
        default :
            res.json({error: 'no price found for that particular plan'});
    }
}
const subscribeCoachToPlan =async  (req, res) =>{
    
    let newSubscription = new subscription({
		title: req.body.plan,
		subscriptionPlan: req.body.plan,
		idCoach: req.body.coachId,
	})

	newSubscription = await newSubscription.save()
	if (!newSubscription) {
		return res.status(404).send({ Message: 'Error : Enable to create a new subscription for '+req.body.coachId })
	}
	res.json(newSubscription)
}

const getSubscriptionByCoachId = async (req, res) => {
    const coachId = req.params.coachId;
    if (mongoose.isValidObjectId(coachId)) {
        const sub = await subscription.find({ idCoach:  coachId })
        console.log(coachId)
        if (!subscription) {
            return res.status(404).send({ Message: 'Error : No subscription found for ' + coachId })
        }
        res.json(sub)
    }
    else {
        res.status(400).send({ Message: 'Error : Invalid coach Id' })
    }
}
module.exports = {
	getPriceByPlanName,
    subscribeCoachToPlan,
    getSubscriptionByCoachId
}
