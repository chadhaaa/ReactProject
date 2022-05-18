import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './allSessions.css'

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
		<tr>
			<th>
				<strong>Session Details</strong>
			</th>
			<td>
				<table>
					<tr>
						<td>
							<strong> Date :</strong>
						</td>
						<td> {day} </td>
					</tr>
					<tr>
						<td>
							<strong>Hour : </strong>
						</td>
						<td> {hour} </td>
					</tr>
					<tr>
						<td>
							<strong>Cancellation :</strong>
						</td>
						<td> {cancellation} </td>
					</tr>
					<tr>
						<td>
							<strong>Reason :</strong>
						</td>
						<td> {reason} </td>
					</tr>
					<tr>
						<td>
							<strong>Feedback :</strong>
						</td>
						<td> {feedback} </td>
					</tr>
				</table>
			</td>
		</tr>
	)
}
