import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
	const history = useNavigate()
	const handleSubmit = async (event) => {
		event.preventDefault()

		const dataToAdd = {
			name,
			description,
			link,
			visibility,
		}
		await axios.post('/api/competence', dataToAdd)
		history('/getCompetence')
	}
	return (
		<div class='form'>
			<div class='title'>Add Competence</div>
			<div class='input-container ic1'>
				<input
					id='name'
					class='input'
					type='text'
					placeholder=' '
					value={name}
					onChange={handleChange('name')}
				/>
				<div class='cut'></div>
				<label for='name' class='placeholder'>
					Name
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='visibility'
					class='input'
					type='text'
					placeholder=' '
					value={visibility}
					onChange={handleChange('visibility')}
				/>
				<div class='cut'></div>
				<label for='visibility' class='placeholder'>
					Visibility
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='link'
					class='input'
					type='text'
					placeholder=' '
					value={link}
					onChange={handleChange('link')}
				/>
				<div class='cut'></div>
				<label for='link' class='placeholder'>
					Link
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='description'
					class='input'
					type='text'
					placeholder=' '
					value={description}
					onChange={handleChange('description')}
				/>
				<div class='cut'></div>
				<label for='description' class='placeholder'>
					Description
				</label>
			</div>
			<button type='text' class='submit' onClick={handleSubmit}>
				Update Competence
			</button>
			<button type='text' class='submit' onClick={() => history('/getCompetence')}>
				BACK
			</button>
		</div>
	)
}

export default AddCompetence
