import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStatistic = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [stat, addStat] = useState({
		visibility: '',
		currentState: '',
		link: '',
	})

	const { visibility, currentState, link } = stat
	const handleChange = (namee) => (event) => {
		addStat({ ...stat, [namee]: event.target.value })
	}

	const updateStat = async (event) => {
		event.preventDefault()

		await axios.put(`/api/statistic/${id}`, stat)
		//badel l link hasb eli aandek baad fel code besh temshilou baad update
		history('/getStats')
	}
	return (
		<>
			<h1> Update statistiques </h1>
			<form onSubmit={updateStat}>
				<label>
					Enter new visibility :
					<input
						type='text'
						placeholder="Enter new Competence's visibility"
						value={visibility}
						onChange={handleChange('visibility')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new limit :
					<input
						type='text'
						placeholder='Enter new Limit'
						value={currentState}
						onChange={handleChange('currentState')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new link :
					<input
						type='text'
						placeholder="Enter new statistic's link"
						value={link}
						onChange={handleChange('link')}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={updateStat}>
					{' '}
					Update statistic{' '}
				</button>
			</form>
		</>
	)
}

export default UpdateStatistic
