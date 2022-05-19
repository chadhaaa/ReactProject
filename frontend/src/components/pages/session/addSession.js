import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddSession = () => {
	const [session, addSession] = useState({	
	day:'',
	hour:'',
	idPlayer:'',
	idCoach:'',
	idPlace:'',
	programId:'',
	
	})

	const history = useNavigate()
	const { day,hour,idPlayer,idCoach,idPlace,programId} = sess
	const handleChange = (namee) => (event) => {
		addSession({ ...sess, [namee]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const dataToAdd = {
			day,
			hour,
			idPlayer,
			idCoach,
			idPlace,
			programId,
			
		}
		await axios.post('/api//newSession', dataToAdd)
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
						value={jour}
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

				
				<button type='submit' onClick={handleSubmit}>
					{' '}
					Add event{' '}
				</button>
			</form>
		</>
	)
} 

export default AddSession