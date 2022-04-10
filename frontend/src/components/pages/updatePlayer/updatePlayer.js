import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePlayer = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [player, updatePlayer] = useState({
		firstname: '',
		lastname: '',
		height: '',
		weight: '',
		active: '',
	})

	const { firstname, lastname, active, height, weight } = player
	const handleChange = (namee) => (event) => {
		updatePlayer({ ...comp, [namee]: event.target.value })
	}

	const updateProf = async (event) => {
		event.preventDefault()

		await axios.put(`/api/player/${id}`, player)
		history('/getProfile')
	}
	return (
		<>
			<h1> Update Player </h1>
			<form onSubmit={updateProf}>
				<label>
					Enter new firstname :
					<input
						type='text'
						placeholder="Enter new Player's firstname"
						value={firstname}
						onChange={handleChange('firstname')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new Player s lastname :
					<input
						type='text'
						placeholder="Enter new Player's lastname"
						value={lastname}
						onChange={handleChange('lastname')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new Player s weight :
					<input
						type='text'
						placeholder="Enter new Player's weight"
						value={weight}
						onChange={handleChange('weight')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new Player s height :
					<input
						type='text'
						placeholder="Enter new Player's lastname"
						value={height}
						onChange={handleChange('height')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new Player s active :
					<input
						type='text'
						placeholder="Enter new Player's active"
						value={active}
						onChange={handleChange('active')}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={updateProf}>
					{' '}
					Update Player Info{' '}
				</button>
			</form>
		</>
	)
}

export default UpdatePlayer
