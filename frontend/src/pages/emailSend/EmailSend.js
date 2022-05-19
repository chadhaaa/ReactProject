import React, { useState } from 'react'
import axios from 'axios'
import './form.css'
import { useNavigate } from 'react-router-dom'

const EmailSend = () => {
	const history = useNavigate()
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

		const dataToSubmit = {
			firstname,
			lastname,
			email,
			password,
			sessionPrice,
			sessionNumbers,
		}
		await axios.post('/api/players', dataToSubmit)
		// history('/')
	}
	return (
		<div class='form'>
			<div class='title'>Invite a player</div>
			<div class='input-container ic1'>
				<input
					id='firstname'
					class='input'
					type='text'
					placeholder=' '
					value={firstname}
					onChange={handleChange('firstname')}
				/>
				<div class='cut'></div>
				<label for='firstname' class='placeholder'>
					Firstname
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='lastname'
					class='input'
					type='text'
					placeholder=' '
					value={lastname}
					onChange={handleChange('lastname')}
				/>
				<div class='cut'></div>
				<label for='lastname' class='placeholder'>
					Lastname
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='email'
					class='input'
					type='text'
					placeholder=' '
					value={email}
					onChange={handleChange('email')}
				/>
				<div class='cut'></div>
				<label for='email' class='placeholder'>
					Email
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='password'
					class='input'
					type='password'
					placeholder=' '
					value={password}
					onChange={handleChange('password')}
				/>
				<div class='cut'></div>
				<label for='password' class='placeholder'>
					Password
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='sessionPrice'
					class='input'
					type='text'
					placeholder=' '
					value={sessionPrice}
					onChange={handleChange('sessionPrice')}
				/>
				<div class='cut'></div>
				<label for='sessionPrice' class='placeholder'>
					Session Price
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='sessionNumbers'
					class='input'
					type='text'
					placeholder=' '
					value={sessionNumbers}
					onChange={handleChange('sessionNumbers')}
				/>
				<div class='cut'></div>
				<label for='sessionNumbers' class='placeholder'>
					Session Numbers
				</label>
			</div>

			<button type='text' class='submit' onClick={handleSubmit}>
				Invite Player
			</button>
		</div>
	)
}

export default EmailSend
