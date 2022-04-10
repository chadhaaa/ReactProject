import axios from 'axios'
import React, { useState } from 'react'

const AddCompetence = () => {
	const [comp, addComp] = useState({
		name: '',
		description: '',
		link: '',
		visibility: '',
	})

	const { name, description, link, visibility } = comp
	const handleChange = (namee) => (event) => {
		addComp({ ...comp, [namee]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const dataToAdd = {
			name,
			description,
			link,
			visibility,
		}
		await axios.post('/api/competence', dataToAdd)
	}
	return (
		<>
			<h1> Add Competence </h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter name :
					<input
						type='text'
						placeholder="Enter Competence's name"
						value={name}
						onChange={handleChange('name')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter Competence s description :
					<input
						type='text'
						placeholder="Enter Competence's description"
						value={description}
						onChange={handleChange('description')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter Competence's link :
					<input
						type='text'
						placeholder="Enter Competence's link"
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

				<button type='submit' onClick={handleSubmit}>
					{' '}
					Add Competence{' '}
				</button>
			</form>
		</>
	)
}

export default AddCompetence
