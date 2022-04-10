import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function Profile({
	firstname,
	lastname,
	weight,
	height,
	goal,
	picture,
	id,
}) {
	const history = useNavigate()

	return (
		<div className='profile'>
			<button onClick={() => history(`/updateProfile/${id}`)}>UPDATE</button>
			<div className='title'>
				<ul>
					<li>{firstname}</li>
					<li>{lastname}</li>
					<li>{picture}</li>
					<li>{weight}</li>
					<li>{height}</li>
					<li>{goal}</li>
					<li>{objectifSportif}</li>
				</ul>
			</div>
		</div>
	)
}
