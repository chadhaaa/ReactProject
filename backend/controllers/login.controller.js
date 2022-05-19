const User = require('../models/user')

const FindUser = async (req, res) => {
	try {
		const userToLogin = await User.findOne({
			email: req.body.email,
			password: req.body.password,
		})
		console.log(req.body.email)
		console.log(req.body.password)
        
		if(userToLogin){
			return res.json({ status: 'ok', user: userToLogin})
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
