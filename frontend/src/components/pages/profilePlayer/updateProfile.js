import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProfile = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [profile, addProfile] = useState({
		firstname: ' ',
		lastname: '',
		weight: '',
		height: '',
	})

	//picture upload
	const [userInfo, setuserInfo] = useState()

	const { firstname, lastname, weight, height } = profile
	const handleChange = (namee) => (event) => {
		addProfile({ ...profile, [namee]: event.target.value })
	}

	const handleInputChange = (event) => {
		setuserInfo({
			...userInfo,
			file: event.target.files,
		})
	}
	const [isSucces, setSuccess] = useState(null)

	const updateProfile = (event) => {
		event.preventDefault()

		const formdata = new FormData()
		formdata.append('picture', userInfo.file)

		axios.put(`http://localhost:8000/api/UpdateProfilePlayer/${id}`, profile, formdata, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		history('/getCompetence')
	}
	return (
		<>
			<h1> Update Profile </h1>
			<form onSubmit={updateProfile}>
				<label>
					Enter firstname :
					<input
						type='text'
						placeholder='Enter new firstname'
						value={firstname}
						onChange={handleChange('firstname')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new lastname :
					<input
						type='text'
						placeholder='Enter new lastname'
						value={lastname}
						onChange={handleChange('lastname')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new weight :
					<input
						type='text'
						placeholder='Enter new weight'
						value={weight}
						onChange={handleChange('weight')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new height :
					<input
						type='text'
						placeholder='Enter new height'
						value={height}
						onChange={handleChange('height')}
					/>
				</label>
				<br />
				<br />

				<div>
					{isSucces !== null ? <h4> {isSucces} </h4> : null}
					<label className='text-white'>
						Select Image :
						<input
							type='file'
							className='form-control'
							name='upload_file'
							onChange={handleInputChange}
						/>
					</label>
				</div>

				<button type='submit' onClick={() => updateProfile()}>
					{' '}
					Update Profile{' '}
				</button>
			</form>
		</>
	)
}

export default UpdateProfile
