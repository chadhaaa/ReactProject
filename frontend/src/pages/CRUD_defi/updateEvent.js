import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEvent = () => {
	
	const { id } = useParams()
    const [even, addEvent] = useState({
		title:'',
		description:'',
		dateDebut:'',
		dateFin:'',
		hour:'',
		place:'',
		visibility:'',
	})
	const history = useNavigate()
	const { title,description,dateDebut,dateFin,hour,place,visibility } = even
	const handleChange = (namee) => (event) => {
		addEvent({ ...even, [namee]: event.target.value })
	}

	const updateEvent = async (event) => {
		event.preventDefault()

		await axios.put(`/api/Event/${id}`,even)
		history('/getEvent')
	}
	return (
		<>
			<h1> Ajouter événnement </h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter titre :
					<input
						type='text'
						placeholder="titre"
						value={title}
						onChange={handleChange('title')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter  description :
					<input
						type='text'
						placeholder=" description"
						value={description}
						onChange={handleChange('description')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter  date début :
					<input
						type='text'
						placeholder=" date début"
						value={dateDebut}
						onChange={handleChange('dateDebut')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter  date Fin :
					<input
						type='text'
						placeholder=" date Fin"
						value={dateFin}
						onChange={handleChange('dateFin')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter  l'heur :
					<input
						type='text'
						placeholder=" time"
						value={hour}
						onChange={handleChange('hour')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter l'emplacement :
					<input
						type='text'
						placeholder=" emplacement"
						value={place}
						onChange={handleChange('place')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter player's visibility :
					<input
						type='text'
						placeholder="Enter  visibilitè"
						value={visibility}
						onChange={handleChange('visibility')}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={updateChllg}>
					{' '}
					Update event{' '}
				</button>
			</form>
		</>
	)
}

export default UpdateEvent	