import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const AddChallenge = () => {
	const history = useNavigate()

	const [link, setLink] = useState('')
	const [goal, setGoal] = useState('')
	
	const addChallenge= (event)=>{
		const dataToAdd = {
			link:link,
			goal:goal,
		}
		await axios.post('http://localhost:8000/api/challenge', dataToAdd)
		history('/challenge')
	}

	useEffect(() => {
		axios.get('http://localhost:8000/api/challenge').then((res) => {
			setLink(res.data.challenge.link)
			setGoal(res.data.challenge.goal)
		})
	}, [])
	return (
		<>
			<h1> Ajouter défi </h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter objectif :
					<input
						type='text'
						placeholder='objectif'
						value={goal}
						onChange={handleChange('goal')}
						data-testid='goal'
					/>
				</label>
				<br />
				<br />

				<label>
					Enter lien de la vidéo :
					<input
						type='text'
						placeholder='lien de la vidéo'
						value={link}
						onChange={handleChange('link')}
						data-testid='link'
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={handleSubmit} data-testid='add-defi'>
					{' '}
					Add Challenge{' '}
				</button>
			</form>
		</>
	)
}

export default AddChallenge
