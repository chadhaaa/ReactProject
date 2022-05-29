import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddChallenge = () => {
	const [chllg, addChllg] = useState({
		link: '',
		goal: '',
	})
	const history = useNavigate()
	const { link, goal } = chllg
	const handleChange = (namee) => (event) => {
		addChllg({ ...chllg, [namee]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const dataToAdd = {
			link,
			goal,
		}
		await axios.post('/api/challenge', dataToAdd)
		history('/getChllgs')
	}
	return (
		<>
			<h1> Ajouter défi </h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter objectif :
					<input
						type='text'
						placeholder="objectif"
						value={goal}
						onChange={handleChange('goal')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter lien de la vidéo :
					<input
						type='text'
						placeholder="lien de la vidéo"
						value={link}                        
						onChange={handleChange('link')}
					/>
				</label>
				<br />
				<br />


				<button type='submit' onClick={handleSubmit}>
					{' '}
					Add Challenge{' '}
				</button>
			</form>
		</>
	)
}

export default AddChallenge