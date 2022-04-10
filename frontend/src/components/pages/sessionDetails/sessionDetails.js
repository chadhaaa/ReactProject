import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function Seance({
	day,
	idPlace,
	cancellation,
	reason,
	feedback,
	hour,
	programId,
	id,
}) {
	const history = useNavigate()

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/oneSession/${id}`)}>VIEW MORE</button>
			</div>
		)
	}

	return (
		<div className='seance'>
			<div className='title'>
				<ul>
					<h2>seance 1</h2>
					<li>{reason}</li>
					<li>{day}</li>
					<li>{idPlace}</li>
					<li>{cancellation}</li>
					<li>{feedback}</li>
					<li>{hour}</li>
					<li>{programId}</li>
				</ul>
			</div>
			{renderActions()}
		</div>
	)
}
