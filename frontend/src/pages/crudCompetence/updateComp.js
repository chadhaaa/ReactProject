import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import './addAndUpdate.css'

const UpdateCompetence = () => {
	const history = useNavigate()
	const { id } = useParams()

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

	const updateComp = (event) => {
		const formdata = {
			name: name,
			description: description,
			link: link,
			stars: stars,
			visibility: visibility,
		}
		axios.put(`http://localhost:8000/api/competence/${id}`, formdata)

		history('/competence')
	}

	useEffect(() => {
		axios.get(`http://localhost:8000/api/competence/${id}`).then((res) => {
			setName(res.data.competence.name)
			setDescription(res.data.competence.description)
			setLink(res.data.competence.link)
			setStars(res.data.competence.stars)
			setVisibility(res.data.competence.visibility)
		})
	}, [])

	return (
		<div className='crudstat'>
		<div class='form' encType='multipart/form-data'>
			<div class='title'>Update Competence</div>
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
			<br />
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

			<h4>Do you want this Competence to be visible to the player ? </h4>
			<label class='toggle-switch'>
				<input type='checkbox' checked={visibility} onChange={changeVisibility} />
				<span class='switch' />
			</label>
			<br />
			<button type='text' class='submit' onClick={updateComp}>
				Update Competence
			</button>
			<button type='text' class='submit' onClick={() => history('/competence')}>
				BACK
			</button>
		</div>
		</div>
	)
}

export default UpdateCompetence
