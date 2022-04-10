import React, { useState } from 'react'
import axios from 'axios'

const EmailSend = () => {
	const [values, setValues] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		sessionPrice: '',
		sessionNumbers: '',
	})

	const { firstname, lastname, email, password, sessionPrice, sessionNumbers } = values
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		console.log('values firstname', firstname)
		console.log('values lastname', lastname)
		console.log('values email', email)
		console.log('values password', password)

		const dataToSubmit = {
			firstname,
			lastname,
			email,
			password,
			sessionPrice,
			sessionNumbers,
		}
		await axios.post('/players', dataToSubmit)
	}
	return (
		<>
			<h1> Invite a player </h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter firstname :
					<input
						type='text'
						placeholder="Enter player's firstname"
						value={firstname}
						onChange={handleChange('firstname')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter Player s lastname :
					<input
						type='text'
						placeholder='Enter Player s lastname'
						value={lastname}
						onChange={handleChange('lastname')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter Player s email :
					<input
						type='text'
						placeholder='Enter Player s email'
						value={email}
						onChange={handleChange('email')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter Player s sessionPrice :
					<input
						type='text'
						placeholder='Enter Player s sessionPrice'
						value={sessionPrice}
						onChange={handleChange('sessionPrice')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter Player s sessionNumbers :
					<input
						type='text'
						placeholder='Enter Player s sessionNumbers'
						value={sessionNumbers}
						onChange={handleChange('sessionNumbers')}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={handleSubmit}>
					{' '}
					Send Invite{' '}
				</button>
			</form>
		</>
	)
}

export default EmailSend
