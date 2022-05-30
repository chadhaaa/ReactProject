import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import './session.css'
const AddSession = () => {
	const history = useNavigate()
	const [day, setDay] = useState('')
	const [hour, setHour] = useState('')
	const [cancellation, setCancellation] = useState('')
	const [reason, setReason] = useState('')
	const [feedback, setFeedback] = useState('')
	
	const addSession = async (event) => {
		const dataToAdd = {
			day:day,
			hour:hour,
			cancellation:cancellation,
			reason:reason,
			feedback:feedback,
					
		}
		axios.post('http://localhost:8000/api/newSession', dataToAdd)
		history('/getSession')
	}
	useEffect(() => {
		axios.get('http://localhost:8000/api/newSession').then((res) => {
			setDay(res.data.sessions.day)
			setHour(res.data.sessions.hour)
			setCancellation(res.data.sessions.cancellation)
			setReason(res.data.sessions.reason)
			setFeedback(res.data.sessions.feedback)
		
		})
	}, [])
	return (
		<>
			<h1> Ajouter Session </h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter jour :
					<input
						type='date'
						placeholder="jour"
						value={day}
						onChange={handleChange('day')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter  l'heur:
					<input
						type='time'
						placeholder="saisir à quel heurs la séance"
						value={hour}
						onChange={handleChange('hour')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter joueur :
					<input
						type='text'
						placeholder=" joueur"
						value={idPlayer}
						onChange={handleChange('IdPlayer')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter l'entreneur :
					<input
						type='text'
						placeholder=" coach"
						value={idCoach}
						onChange={handleChange('idCoach')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter l'emplacement de séance :
					<input
						type='text'
						placeholder=" place"
						value={idPlace}
						onChange={handleChange('idPlace')}
					/>
				</label>
				<br />
				<br />
				<label>
					choisire un programme :
				<select>
					<option 
					value={programId}
					onChange={handleChange('programIdd')}
					>
					</option>
				</select>
				</label>
				<br />
				<br />

				<label>
					cancellation :
					<input
						type='text'
						placeholder=" annulation"
						value={cancellation}
						onChange={handleChange('cancellation')}
					/>
				</label>
				<br />
				<br />
				<label>
					cause de l'annulation:
					<input
						type='text'
						placeholder=" annulation"
						value={reason}
						onChange={handleChange('reason')}
					/>
				</label>
				<br />
				<br />
				<label>
					feedback:
					<input
						type='text'
						placeholder=" feedback"
						value={feedback}
						onChange={handleChange('feedback')}
					/>
				</label>
				<br />
				<br />
				
				<button type='submit' onClick={handleSubmit}>
					{' '}
					Add event{' '}
				</button>
			</form>
		</>
	)
} 

export default AddSession