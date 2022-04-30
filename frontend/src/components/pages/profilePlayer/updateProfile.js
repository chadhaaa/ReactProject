import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './update.css'

const UpdateProfile = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [file, setFile] = useState('')
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [weight, setWeight] = useState('')
	const [height, setHeight] = useState('')
	const [password, setPassword] = useState('')
	const [tel, setTel] = useState('')
	const [scholar, setScholar] = useState('')

	const onChangeFile = (e) => {
		setFile(e.target.files[0])
	}

	//picture upload

	const updateProfile = (event) => {
		// event.preventDefault()

		const formdata = new FormData()
		formdata.append('picture', file)
		formdata.append('firstname', firstname)
		formdata.append('lastname', lastname)
		formdata.append('weight', weight)
		formdata.append('password', password)
		formdata.append('height', height)
		formdata.append('tel', tel)
		formdata.append('scholar', scholar)

		axios.put(`http://localhost:8000/api/UpdateProfilePlayer/${id}`, formdata, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		history(`/Profile/${id}`)
	}
	useEffect(() => {
		axios.get(`http://localhost:8000/api/UpdateProfilePlayer/${id}`).then((res) => {
			setFile(res.data.file)
			setFirstname(res.data.firstname)
			setLastname(res.data.lastname)
			setHeight(res.data.height)
			setWeight(res.data.weight)
			setTel(res.data.tel)
			setPassword(res.data.password)
			setScholar(res.data.scholar)
		})
	}, [])
	return (
		<div class='form'>
			<div class='title'>Update Your Profile</div>
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
			</div>

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
				<label for='Enter new Last Name' class='placeholder'>
					Enter new Last Name
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
					id='Height'
					class='input'
					type='text'
					placeholder=' '
					value={height}
					onChange={(e) => setHeight(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='Enter new Height' class='placeholder'>
					Enter new Height
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='Weight'
					class='input'
					type='text'
					placeholder=' '
					value={weight}
					onChange={(e) => setWeight(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='Enter new Height' class='placeholder'>
					Enter new Weight
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='Telephone'
					class='input'
					type='text'
					placeholder=' '
					value={tel}
					onChange={(e) => setTel(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='Enter new Telephone Number' class='placeholder'>
					Enter new Telephone Number
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='Scholar'
					class='input'
					type='text'
					placeholder=' '
					value={scholar}
					onChange={(e) => setScholar(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='Enter new Scholar' class='placeholder'>
					Enter new Scholar
				</label>
			</div>
			<br />
			<label class='custom-file-upload'>
				<input type='file' filename='picture' onChange={onChangeFile} required='required' />
			</label>
			<button type='text' class='submit' onClick={() => updateProfile()}>
				Update Profile
			</button>
			<button type='text' class='submit' onClick={() => history(`/Profile/${id}`)}>
				BACK
			</button>
		</div>
	)
}

export default UpdateProfile
