import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export default function OneSeance({
	day,
	idPlace,
	cancellation,
	reason,
	feedback,
	hour,
	programId,
	id,
}) {
	return (
		<div className='oneSeance'>
			<div className='title'>
				<ul>
					<h2>Details session</h2>
					<li>{reason}</li>
					<li>{day}</li>
					<li>{idPlace}</li>
					<li>{cancellation}</li>
					<li>{feedback}</li>
					<li>{hour}</li>
					<li>{programId}</li>
				</ul>
			</div>
		</div>
	)
}
