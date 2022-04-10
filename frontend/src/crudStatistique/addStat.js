import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStatistic = () => {
	const [stat, addStat] = useState({
		title: '',
		description: '',
		link: '',
		visibility: '',
		currentState: '',
	})
	const history = useNavigate()
	const { title, description, link, visibility, currentState } = stat
	const handleChange = (namee) => (event) => {
		addStat({ ...stat, [namee]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const dataToAdd = {
			title,
			description,
			link,
			visibility,
			currentState,
		}
		await axios.post('/api/statistic', dataToAdd)
		history('/getStats')
	}
	return (
		<>
			<h1> Add Statistic </h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter title :
					<input
						type='text'
						placeholder="Enter Stat's title"
						value={title}
						onChange={handleChange('title')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter Stat s description :
					<input
						type='text'
						placeholder="Enter Stat's description"
						value={description}
						onChange={handleChange('description')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter Stat's link :
					<input
						type='text'
						placeholder="Enter Stat's link"
						value={link}
						onChange={handleChange('link')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter player's visibility :
					<input
						type='text'
						placeholder="Enter player's visibility"
						value={visibility}
						onChange={handleChange('visibility')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter Stat's Limit :
					<input
						type='text'
						placeholder="Enter Stat's Limit"
						value={currentState}
						onChange={handleChange('currentState')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter but :
					<input
						type='text'
						placeholder="Enter Stat's but"
						value={but}
						onChange={handleChange('but')}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={handleSubmit}>
					{' '}
					Add Competence{' '}
				</button>
			</form>
		</>
	)
}

export default AddStatistic
