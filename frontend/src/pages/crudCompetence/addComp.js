import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'

const AddCompetence = () => {
	const history = useNavigate()

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [link, setLink] = useState('')
	const [stars, setStars] = useState('')
	const [visibility, setVisibility] = useState(false)

	const changeVisibility = () => {
		setVisibility(!visibility)
	}

	const ratingStars = (value) => {
		setStars(value)
	}
	const addComp = (event) => {
		const formdata = {
			name: name,
			description: description,
			link: link,
			stars: stars,
			visibility: visibility,
		}
		axios.post('http://localhost:8000/api/competence', formdata)

		history('/competence')
	}

	useEffect(() => {
		axios.get('http://localhost:8000/api/competence').then((res) => {
			setName(res.data.competence.name)
			setDescription(res.data.competence.description)
			setLink(res.data.competence.link)
			setVisibility(res.data.competence.visibility)
			setStars(res.data.competence.stars)
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
					data-test-id='name'
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
					data-testid='link'
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
					data-testid='description'
				/>
				<div class='cut'></div>
				<label for='description' class='placeholder'>
					Description
				</label>
			</div>
			<div>
				<h4> Competence Rating </h4>
				<ReactStars
					className='starsRatings'
					count={5}
					value={stars}
					onChange={ratingStars}
					size={30}
					color2={'#ffd700'}
				/>
			</div>

			<h4>Do you want to set this competence to be Visible to Player ? </h4>
			<label class='toggle-switch'>
				<input type='checkbox' checked={visibility} onChange={changeVisibility} />
				<span class='switch' />
			</label>
			<br />
			<button type='text' class='submit' onClick={addComp} data-testid='addCompetence'>
				Add Competence
			</button>
			<button type='text' class='submit' onClick={() => history('/competence')}>
				BACK
			</button>
		</div>
	)
}

export default AddCompetence
