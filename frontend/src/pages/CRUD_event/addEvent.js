import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AddEvent = () => {
	const history = useNavigate()
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [dateDebut, setDateDebut] = useState('')
	const [dateFin, setDateFin] = useState('')
	const [hour, setHour] = useState('')
	const [place, setPlace] = useState('')
	const [visibility, setVisibility] = useState(false)

	const changeVisibility = () => {
		setVisibility(!visibility)
	}
	const assChallenge = (event) => {
		const dataToAdd = {
			title: title,
			description: description,
			dateDebut: dateDebut,
			dateFin: dateDebut,
			hour: hour,
			place: place,
			visibility: visibility,
		}

		axios.post('http://localhost:8000/api/event', dataToAdd)
		history('/events')
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
			<form onSubmit={assChallenge}>
				<label>
					Enter titre :
					<input
						type='text'
						placeholder='titre'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
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
						onChange={(e) => setDescription(e.target.value)}
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
						onChange={(e) => setDateDebut(e.target.value)}
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
						onChange={(e) => setDateFin(e.target.value)}
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
						onChange={(e) => setHour(e.target.value)}
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
						onChange={(e) => setPlace(e.target.value)}
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
						onChange={(e) => setVisibility(e.target.value)}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={assChallenge} data-testid='add-event'>
					{' '}
					Add event{' '}
				</button>
			</form>
		</>
	)
}

export default AddEvent
