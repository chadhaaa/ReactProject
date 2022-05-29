import { useNavigate, Link } from 'react-router-dom'
import './sessions.css'

export default function Session({
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
				<th scope='col'>Jour</th>
				<th scope='col'>Heur</th>
				<th scope='col'>Feedback</th>
                <th scope='col'>Annulation</th>
                <th scope='col'>Raison</th>
				<th scope='col'>Action</th>
			</tr>

			<tbody>
				<tr>
					<td data-label='Day'>{day}</td>
					<td data-label='Hour'>{hour}</td>
					<td data-label='Feedback'>{feedback}</td>
                    <td data-label='Annulation'>{cancellation}</td>
                    <td data-label='Raison'>{reason}</td>
					<td data-label='Action'>{renderActions()}</td>
				</tr>
			</tbody>
		</table>
	)
}