import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddSession = () => {
	const [session, addSession] = useState({	
	day:'',
	hour:'',
	idPlayer:'',
	cancellation:'',
	reason:'',
	feedback:'',
	
	})

	const history = useNavigate()
	const { day,hour,cancellation,reason,feedback} = sess
	const handleChange = (namee) => (event) => {
		addSession({ ...sess, [namee]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const dataToAdd = {
			day,
			hour,
			idPlayer,
			cancellation,
			reason,
			feedback,
					
		}
		await axios.post('/api/newSession', dataToAdd)
		history('/addSession')
	}
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