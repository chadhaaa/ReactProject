import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateChallenge = () => {
	
	const { id } = useParams()
    const [chllg, addChllg] = useState({
		link: '',
		goal: '',
	})
    const history = useNavigate()
	const { link, goal } = chllg
	const handleChange = (namee) => (event) => {
        addChllg({ ...chllg, [namee]: event.target.value })
	}

	const updateChllg = async (event) => {
		event.preventDefault()

		await axios.put(`/api/challenge/${id}`,chllg)
		history('/getChllgs')
	}
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
			</form>
		</>
	)
}

export default UpdateChallenge