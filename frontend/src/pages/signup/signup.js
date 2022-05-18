import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SignupCoach = () => {
	const history = useNavigate()
	const { id } = useParams()

	// DATA COACH
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [photo, setPhoto] = useState('')
    const [sex, setSex] = useState('')



	const signupCoach = (event) => {
		// event.preventDefault()

		const formdata = {

			firstname: firstname,
			lastname: lastname,
			email: email,
			password: password,
            birthDate: birthDate,
            photo : photo,
            sex: sex,
 }

		axios.post(`http://localhost:8000/api/signup/`, formdata)

	}



	return (
		<div class='form' encType='multipart/form-data'>
			<div class='title'>Signup Coach</div>
			<div class='input-container ic1'>
				<input
					id='Firstname'
					class='input'
					type='text'
					placeholder=' '
					value={firstname}
					onChange={(e) => setFirstname(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='Enter new first Name' class='placeholder'>
					Enter new first Name
				</label>
				<div class='input-container ic2'>
					<input
						id='Lastname'
						class='input'
						type='text'
						placeholder=' '
						value={lastname}
						onChange={(e) => setLastname(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new first Name' class='placeholder'>
						Enter new Last Name
					</label>
				</div>
				<div class='input-container ic2'>
					<input
						id='Email'
						class='input'
						type='email'
						placeholder=' '
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new Email' class='placeholder'>
						Enter new Email
					</label>
				</div>
				<div class='input-container ic2'>
					<input
						id='Password'
						class='input'
						type='password'
						placeholder=' '
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new Password' class='placeholder'>
						Enter new Password
					</label>
				</div>
				<div class='input-container ic2'>
					<input
						id='photo'
						class='input'
						type='file'
						value={photo}
						onChange={(e) => setPhoto(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Change photo' class='placeholder'>
                        Change photo
					</label>
				</div>

				<div class='input-container ic2'>
					<input
						id='birthDate'
						class='input'
						type='date'
						placeholder=' '
						value={birthDate}
						onChange={(e) => setBirthDate(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new birthdate' class='placeholder'>
                    Enter new birthdate
					</label>
				</div>

				<div class='input-container ic2'>
					<input
						id='sex'
						class='input'
						type='text'
						placeholder=' '
						value={sex}
						onChange={(e) => setSex(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new sex' class='placeholder'>
						Enter new sex
					</label>
				</div>
				<br />

				<button type='text' class='submit' onClick={() => signupCoach()}>
					Signup Coach
				</button>
			</div>

			<br />
		</div>
	)
}

export default SignupCoach