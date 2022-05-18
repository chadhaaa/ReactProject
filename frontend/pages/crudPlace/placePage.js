import { useState } from 'react'
import './place.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function Place({ Name, countryState, country, address, id }) {
	const history = useNavigate()

	const deletePlace = async (event) => {
		event.preventDefault()
		await axios.delete(`/api/place/${id}`)
		history('/addPlace')
	}

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updatePlace/${id}`)}>UPDATE</button>
				<button onClick={deletePlace}> DELETE</button>
			</div>
		)
	}

	return (
		<div className='place'>
			<div className='title'>
				<ul>
					<li>{Name}</li>
					<li>{countryState}</li>
					<li>{country}</li>
					<li>{address}</li>
				</ul>
			</div>
			{renderActions()}
		</div>
	)
}