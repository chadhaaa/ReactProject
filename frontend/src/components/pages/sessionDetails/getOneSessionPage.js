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
				<h1>
					<strong>Session</strong>
				</h1>
				<table>
					<tr>
						<td>{reason}</td>
						<td>{day}</td>
						<td>{idPlace}</td>
						<td>{cancellation}</td>
						<td>{feedback}</td>
						<td>{hour}</td>
						<td>{programId}</td>
					</tr>
				</table>
			</div>
		</div>
	)
}
