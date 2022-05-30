import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import './event.css'

const UpdateEvent = () => {
	const history = useNavigate()
	const { id } = useParams()

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

	const updateEvent = async (event) => {
		const dataToUp = {
			title: title,
			description: description,
			dateDebut: dateDebut,
			dateFin: dateFin,
			hour: hour,
			place: place,
			visibility: visibility,
		}

		await axios.put(`http://localhost:8000/api/event/${id}`, dataToUp)
		history('/events')
	}
	useEffect(() => {
		axios.get(`http://localhost:8000/api/event/${id}`).then((res) => {
			setTitle(res.data.event.title)
			setDescription(res.data.event.description)
			setDateDebut(res.data.event.dateDebut)
			setDateFin(res.data.event.dateFin)
			setHour(res.data.event.hour)
			setPlace(res.data.event.place)
			setVisibility(res.data.event.visibility)
		})
	}, [])
	return (
		<>
			<h1> Ajouter événnement </h1>
			<form onSubmit={updateEvent}>
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

				<button type='submit' onClick={updateEvent}>
					{' '}
					Update event{' '}
				</button>
				<button type='text' onClick={() => history('/events')}>
					BACK
				</button>
			</form>
		</>
	)
}

export default UpdateEvent
