import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateCompetence = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [comp, addComp] = useState({
		visibility: '',
		note: '',
		link: '',
		description: '',
		name: '',
	})

	const { visibility, note, name, link, description } = comp
	const handleChange = (namee) => (event) => {
		addComp({ ...comp, [namee]: event.target.value })
	}

	const updateComp = async (event) => {
		event.preventDefault()

		await axios.put(`/api/competence/${id}`, comp)
		//badel l link hasb eli aandek baad fel code besh temshilou baad update
		history('/getCompetence')
	}
	return (
		<>
			<h1> Update Competence </h1>
			<form onSubmit={updateComp}>
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
					Enter new Competence s note :
					<input
						type='text'
						placeholder="Enter new Competence's note"
						value={note}
						onChange={handleChange('note')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new Competence s description :
					<input
						type='text'
						placeholder="Enter new Competence's description"
						value={description}
						onChange={handleChange('description')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new Competence s link :
					<input
						type='text'
						placeholder="Enter new Competence's note"
						value={link}
						onChange={handleChange('link')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new Competence s name :
					<input
						type='text'
						placeholder="Enter new Competence's name"
						value={name}
						onChange={handleChange('name')}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={updateComp}>
					{' '}
					Update Competence{' '}
				</button>
			</form>
		</>
	)
}

export default UpdateCompetence