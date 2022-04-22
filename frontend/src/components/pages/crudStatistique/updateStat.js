import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStat = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [stat, addStat] = useState({
		visibility: '',
		currentState: '',
		link: '',
	})

	const { visibility, currentState, link } = stat
	const handleChange = (namee) => (event) => {
		addStat({ ...stat, [namee]: event.target.value })
	}

	const updateStat = async (event) => {
		event.preventDefault()

		await axios.put(`/api/statistic/${id}`, stat)

		history('/getStat')
	}
	return (
		<>
			<h1> Update Statistic </h1>
			<form onSubmit={updateStat}>
				<label>
					Enter new visibility :
					<input
						type='text'
						placeholder="Enter new statistic's visibility"
						value={visibility}
						onChange={handleChange('visibility')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new Competence s state :
					<input
						type='text'
						placeholder="Enter new Competence's state"
						value={currentState}
						onChange={handleChange('currentState')}
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

				<button type='submit' onClick={updateStat}>
					{' '}
					Update Statistic{' '}
				</button>
				<br />
				<button onClick={() => history('/getStat')}> BACK </button>
			</form>
		</>
	)
}

export default UpdateStat
