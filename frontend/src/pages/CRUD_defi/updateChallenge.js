import axios from 'axios'
import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import './challenge.css'

const UpdateChallenge = () => {
	const history = useNavigate()
	const { id } = useParams()

	const [link, setLink] = useState('')
	const [goal, setGoal] = useState('')

	const updateChllg = (event) => {
		const dataToUp={	
			link:link,
			goal:goal,
		}
			axios.post(`http://localhost:8000/api/challenge/${id}`, dataToUp)
			history('/challenge')	
		}
		useEffect(() => {
			axios.get(`http://localhost:8000/api/challenge/${id}`).then((res) => {
				setLink(res.data.challenge.link)
				setGoal(res.data.challenge.goal)
		
			})
		}, [])
	
	return (
		<>
			<h1> mise à jours défi  </h1>
			<form onSubmit={updateChllg}>
				<label>
					Enter le nouveau objectif :
					<input
						type='text'
						placeholder="nouveau objectif"
						value={goal}
						onChange={handleChange('goal')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter le nouveau lien de la vidéo :
					<input
						type='text'
						placeholder="nouveau lien de la vidéo"
						value={link}
						onChange={handleChange('link')}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={updateChllg}>
					{' '}
					Update challenge{' '}
				</button>
				<button 
				type='text'
				onClick={() => history('/challenge')}>
				BACK
			</button>
			</form>
		</>
	)
}

export default UpdateChallenge