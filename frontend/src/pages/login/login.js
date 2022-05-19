import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	async function loginUser(event){

		event.preventDefault()
		const body = {
			email:email,
			password : password,
		}

		await axios.post('http://localhost:8000/api/login', body)
		.then((response) => {
			console.log(response.data)
			if(response.data.user){

				alert("login successful")
				if(response.data.user.new){
					window.location.href = `/firstLogin/${response.data.user._id}`
				}
				

			}else{
				alert("Check your logins")
			}
			
		});
		
	}
	return (
		<div class='form' encType='multipart/form-data'>
			<div class='title'>Login</div>
			<div class='input-container ic1'>
				
				
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
				
				<br />

				<button type='text' class='submit' onClick={loginUser}>
					Login
				</button>
			</div>

			<br />
		</div>
	)
}

export default Login