import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './addAndUpdate.css'

const UpdateStat = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [stat, addStat] = useState({
		visibility: '',
		currentState: '',
		link: '',
		description: '',
		title: '',
		unit: '',
	})

	const { visibility, currentState, link, description, title, unit } = stat
	const handleChange = (namee) => (event) => {
		addStat({ ...stat, [namee]: event.target.value })
	}

	const updateStat = async (event) => {
		event.preventDefault()

		await axios.put(`/api/statistic/${id}`, stat)

		history('/getStat')
	}
	return (
		<div class='form'>
			<div class='title'>Update Statistic </div>
			<div class='input-container ic1'>
				<input
					id='title'
					class='input'
					type='text'
					placeholder=' '
					value={title}
					onChange={handleChange('title')}
				/>
				<div class='cut'></div>
				<label for='title' class='placeholder'>
					Title
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='unit'
					class='input'
					type='text'
					placeholder=' '
					value={unit}
					onChange={handleChange('unit')}
				/>
				<div class='cut'></div>
				<label for='unit' class='placeholder'>
					Unit
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='visibility'
					class='input'
					type='text'
					placeholder=' '
					value={visibility}
					onChange={handleChange('visibility')}
				/>
				<div class='cut'></div>
				<label for='visibility' class='placeholder'>
					Visibility
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='description'
					class='input'
					type='text'
					placeholder=' '
					value={description}
					onChange={handleChange('description')}
				/>
				<div class='cut'></div>
				<label for='description' class='placeholder'>
					Description
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='currentState'
					class='input'
					type='text'
					placeholder=' '
					value={currentState}
					onChange={handleChange('currentState')}
				/>
				<div class='cut'></div>
				<label for='currentState' class='placeholder'>
					Current State
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='link'
					class='input'
					type='text'
					placeholder=' '
					value={link}
					onChange={handleChange('link')}
				/>
				<div class='cut'></div>
				<label for='link' class='placeholder'>
					Link
				</label>
			</div>

			<button type='text' class='submit' onClick={updateStat}>
				Update Statistic
			</button>
			<button type='text' class='submit' onClick={() => history('/getStat')}>
				{' '}
				BACK{' '}
			</button>
		</div>
	)
}

export default UpdateStat
