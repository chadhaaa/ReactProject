import { useState } from 'react'
import './session.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function session({ 
    day,
	hour,
    id,
}) {
	const history = useNavigate()

	const deleteSession = async (event) => {
		event.preventDefault()
		await axios.delete(`/api/session/${id}`)
		history('/addSession')
	}

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updateSession/${id}`)}>UPDATE</button>
				<button onClick={deleteSession}> DELETE</button>
			</div>
		)
	}

	return (
		<div className='session'>
			<div className='title'>
				<ul>
					<li>{day}</li>
					<li>{hour}</li>
					
				
				</ul>
			</div>
			{renderActions()}
		</div>
	)
}