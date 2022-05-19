const express = require('express')
const router = express.Router()
const {
	getPriceByPlanName,
	subscribeCoachToPlan,
	getSubscriptionByCoachId,
} = require('../controllers/plan.controller')

router.get('/price/:plan', getPriceByPlanName)
router.post('/create-subscription',subscribeCoachToPlan)
router.get('/subscription/:coachId', getSubscriptionByCoachId)
module.exports = router
