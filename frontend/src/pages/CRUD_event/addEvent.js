import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const changeVisibility = () => {
	setVisibility(!visibility)
}

const AddEvent = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [dateDebut, setDateDebut] = useState('')
	const [dateFin, setDateFin] = useState('')
	const [hour, setHour] = useState('')
	const [visibility, setVisibility] = useState(false)

	const history = useNavigate()
	const { title, description, dateDebut, dateFin, hour, place, visibility } = even
	const handleChange = (namee) => (event) => {
		addEvent({ ...even, [namee]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const dataToAdd = {
			title,
			description,
			dateDebut,
			dateFin,
			hour,
			place,
			visibility,
		}

		axios.post('http://localhost:8000/api/event', dataToAdd)
		history('/getEvents')
	}
	useEffect(() => {
		axios.get('http://localhost:8000/api/event').then((res) => {
			setTitle(res.data.events.title)
			setDescription(res.data.events.description)
			setDateDebut(res.data.events.dateDebut)
			setDateFin(res.data.events.dateFin)
			setHour(res.data.events.hour)
			setPlace(res.data.events.place)
			setVisibility(res.data.events.visibility)
		})
	}, [])

	return (
		<>
			<h1> Ajouter événnement </h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter titre :
					<input
						type='text'
						placeholder='titre'
						value={title}
						onChange={handleChange('title')}
						data-testid='title'
					/>
				</label>
				<br />
				<br />

				<label>
					Enter description :
					<input
						type='text'
						placeholder=' description'
						value={description}
						onChange={handleChange('description')}
						data-testid='description'
					/>
				</label>
				<br />
				<br />

				<label>
					Enter date début :
					<input
						type='text'
						placeholder=' date début'
						value={dateDebut}
						onChange={handleChange('dateDebut')}
						data-testid='dateDebut'
					/>
				</label>
				<br />
				<br />

				<label>
					Enter date Fin :
					<input
						type='text'
						placeholder=' date Fin'
						value={dateFin}
						onChange={handleChange('dateFin')}
						data-testid='dateFin'
					/>
				</label>
				<br />
				<br />

				<label>
					Enter l'heur :
					<input
						type='text'
						placeholder=' time'
						value={hour}
						onChange={handleChange('hour')}
						data-testid='hour'
					/>
				</label>
				<br />
				<br />

				<label>
					Enter l'emplacement :
					<input
						type='text'
						placeholder=' emplacement'
						value={place}
						onChange={handleChange('place')}
						data-testid='place'
					/>
				</label>
				<br />
				<br />

				<label>
					Enter player's visibility :
					<input
						type='text'
						placeholder='Enter  visibilitè'
						value={visibility}
						onChange={handleChange('visibility')}
						data-testid='visibility'
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={handleSubmit} data-testid='add-event'>
					{' '}
					Add event{' '}
				</button>
			</form>
		</>
	)
}

export default AddEvent
