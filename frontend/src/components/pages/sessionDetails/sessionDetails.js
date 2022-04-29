import { useNavigate, Link } from 'react-router-dom'
import './allSessions.css'

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
		<table>
			<tr>
				<th scope='col'>Day</th>
				<th scope='col'>Hour</th>
				<th scope='col'>Feedback</th>
				<th scope='col'>See more</th>
			</tr>

			<tbody>
				<tr>
					<td data-label='Day'>{day}</td>
					<td data-label='Hour'>{hour}</td>
					<td data-label='Feedback'>{feedback}</td>
					<td data-label='See more'>{renderActions()}</td>
				</tr>
			</tbody>
		</table>
	)
}
