import axios from 'axios'
import React, { useState,useEffect } from 'react'
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
	const [visibility, setVisibility] = useState(false)
	
	const changeVisibility = () => {
		setVisibility(!visibility)
	}
	
  

	const updateEvent =  (event) => {
		const dataToUp={
		title:title,
		description:description,
		dateDebut:dateDebut,
		dateFin:dateFin,
		hour:hour,
		place:place,
		visibility:visibility,

		}

		await axios.put(`http://localhost:8000/api/event/${id}`,dataToUp)
		history('/event')
	}
	useEffect(() => {
		axios.get(`http://localhost:8000/api/event/${id}`).then((res) => {
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
				<button type='text'  onClick={() => history('/event')}>
				BACK
			</button>
			</form>
		</>
	)
}

export default UpdateEvent	