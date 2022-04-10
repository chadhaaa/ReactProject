import { useState } from 'react'
import './challenge.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function Challenge({ 
    link, 
    goal, 
    id,
}) {
	const history = useNavigate()

	const deleteChallenge = async (event) => {
		event.preventDefault()
		await axios.delete(`/api/challenge/${id}`)
		history('/addChallenge')
	}

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updateChallenge/${id}`)}>UPDATE</button>
				<button onClick={deleteChallenge}> DELETE</button>
			</div>
		)
	}

	return (
		<div className='challenge'>
			<div className='title'>
				<ul>
					<li>{goal}</li>
					<li>{link}</li>
				</ul>
			</div>
			{renderActions()}
		</div>
	)
}