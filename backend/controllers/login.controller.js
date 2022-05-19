const user = require('../models/user')
const User = require('../models/user')

const FindUser = async (req, res) => {
	try {
		const userToLogin = await User.findOne({
			email: req.body.email,
			password: req.body.password,
		})
		.populate('playerId')
		.populate('coachId')
		console.log(req.body.email)
		console.log(req.body.password)
        
		if(userToLogin){
			if(userToLogin.playerId){
				
				return res.json({ status: 'ok', user: userToLogin.playerId, role : userToLogin.role})

			}else if (userToLogin.coachId){
				return res.json({ status: 'ok', user: userToLogin.coachId, role : userToLogin.role})


			}
		} else {
			return res.json({ status: 'error', user:false})

		}
	

		res.send({ status: 'ok'})
	} catch (err) {
		'Error ' + err
	}
}

module.exports = {
	FindUser
}
