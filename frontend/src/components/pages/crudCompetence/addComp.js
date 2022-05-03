import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCompetence = () => {
	const history = useNavigate()

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [link, setLink] = useState('')
	const [visibility, setVisibility] = useState(false)

	const changeVisibility = () => {
		setVisibility(!visibility)
	}

	const addComp = (event) => {
		const formdata = {
			name: name,
			description: description,
			link: link,
			visibility: visibility,
		}
		axios.post('http://localhost:8000/api/competence', formdata)

		history('/getCompetence')
	}

	useEffect(() => {
		axios.get('http://localhost:8000/api/competence').then((res) => {
			setName(res.data.competence.name)
			setDescription(res.data.competence.description)
			setLink(res.data.competence.link)
			setVisibility(res.data.competence.visibility)
		})
	}, [])

	return (
		<div class='form'>
			<div class='title'>Add Competence</div>
			<div class='input-container ic1'>
				<input
					id='name'
					class='input'
					type='text'
					placeholder=' '
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='name' class='placeholder'>
					Name
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

			<h4>Do you want to set this competence to Visible to Player ? </h4>
			<label class='toggle-switch'>
				<input type='checkbox' checked={visibility} onChange={changeVisibility} />
				<span class='switch' />
			</label>
			<br />
			<button type='text' class='submit' onClick={addComp}>
				Add Competence
			</button>
			<button type='text' class='submit' onClick={() => history('/getCompetence')}>
				BACK
			</button>
		</div>
	)
}

export default AddCompetence
