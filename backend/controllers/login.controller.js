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
		if (!userToLogin)
			res.status(404).json({"message":"user not found check your email or password"})
		let user =  ( userToLogin.playerId )? {...userToLogin.playerId ,  password:''} : {...userToLogin.coachId  ,password:''} 
		
		if(userToLogin){
			return res.json({ status: 'ok', user: user, role : userToLogin.role})
		} else {
			return res.json({ status: 'error', user:false})
		}
	
	} catch (err) {
		'Error ' + err
	}
}

module.exports = {
	FindUser
}
