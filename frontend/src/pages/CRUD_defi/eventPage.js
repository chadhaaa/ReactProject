import { useState } from 'react'
import './event.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function event({ 
    title,
	description,
	dateDebut,
	dateFin,
	hour,
	place,
	visibility,
    id,
}) {
	const history = useNavigate()

	const deleteEvent = async (event) => {
		event.preventDefault()
		await axios.delete(`/api/event/${id}`)
		history('/addEvent')
	}

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updateEvent/${id}`)}>UPDATE</button>
				<button onClick={deleteEvent}> DELETE</button>
			</div>
		)
	}

	return (
		<div className='event'>
			<div className='title'>
				<ul>
					<li>{title}</li>
					<li>{description}</li>
					<li>{dateDebut}</li>
					<li>{dateFin}</li>
					<li>{hour}</li>
					<li>{place}</li>
					<li>{visibility}</li>
				
				</ul>
			</div>
			{renderActions()}
		</div>
	)
}