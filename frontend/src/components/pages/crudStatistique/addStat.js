import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './addAndUpdate.css'

const AddStatistic = () => {
	const history = useNavigate()

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [link, setLink] = useState('')
	const [unit, setUnit] = useState('')
	const [currentState, setCurrentState] = useState('')
	const [type, setType] = useState('')
	const [visibility, setVisibility] = useState(false)

	const changeVisibility = () => {
		setVisibility(!visibility)
	}

	const addStat = (event) => {
		const formdata = {
			title: title,
			description: description,
			link: link,
			visibility: visibility,
			unit: unit,
			currentState: currentState,
			type: type,
		}
		axios.post('http://localhost:8000/api/statistic', formdata)

		history('/getStat')
	}

	useEffect(() => {
		axios.get('http://localhost:8000/api/statistic').then((res) => {
			setTitle(res.data.statistics.title)
			setDescription(res.data.statistics.description)
			setLink(res.data.statistics.link)
			setVisibility(res.data.statistics.visibility)
			setUnit(res.data.statistics.unit)
			setCurrentState(res.data.statistics.currentState)
			setType(res.data.statistics.type)
		})
	}, [])

	return (
		<div class='form'>
			<div class='title'>Add Statistic</div>
			<div class='input-container ic1'>
				<input
					id='title'
					class='input'
					type='text'
					placeholder=' '
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='title' class='placeholder'>
					Title
				</label>
			</div>

			{/* <div class='input-container ic2'>
				<input
					id='visibility'
					class='input'
					type='text'
					placeholder=' '
					value={visibility}
					onChange={(e) => setVisibility(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='visibility' class='placeholder'>
					Visibility
				</label>
			</div> */}

			<div class='input-container ic2'>
				<input
					id='description'
					class='input'
					type='text'
					placeholder=' '
					value={description}
					onChange={(e) => setDescription(e.target.value)}
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
					onChange={(e) => setCurrentState(e.target.value)}
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
					onChange={(e) => setLink(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='link' class='placeholder'>
					Link
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='unit'
					class='input'
					type='text'
					placeholder=' '
					value={unit}
					onChange={(e) => setUnit(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='link' class='placeholder'>
					Unit
				</label>
			</div>
			<div class='input-container ic2'>
				<input
					id='type'
					class='input'
					type='text'
					placeholder=' '
					value={type}
					onChange={(e) => setType(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='link' class='placeholder'>
					Type
				</label>
			</div>
			<h4>Do you want to set this Statistic to Visible to Player ? </h4>
			<label class='toggle-switch'>
				<input type='checkbox' checked={visibility} onChange={changeVisibility} />
				<span class='switch' />
			</label>
			<br />
			<button type='text' class='submit' onClick={addStat}>
				Add Statistic
			</button>
			<button type='text' class='submit' onClick={() => history('/getStat')}>
				BACK
			</button>
		</div>
	)
}

export default AddStatistic
