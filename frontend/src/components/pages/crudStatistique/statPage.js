import axios from 'axios'
import './stat.css'
import { useNavigate } from 'react-router-dom'

export default function Statistic({
	title,
	description,
	link,
	visibility,
	currentState,
	unit,
	type,
	id,
}) {
	const history = useNavigate()

	const deleteStatistic = async (event) => {
		event.preventDefault()
		await axios.delete(`/api/statistic/${id}`)
		window.location.reload(false)
	}

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updateStat/${id}`)}>UPDATE</button>
				<button onClick={() => history(`/statDetails/${id}`)}>VIEW MORE</button>
				<button onClick={deleteStatistic}> DELETE</button>
			</div>
		)
	}

	return (
		<div class='container'>
			<table>
				<thead>
					<tr>
						<th scope='col'>Title</th>
						<th scope='col'>Description</th>
						<th scope='col'>Type</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label='Title'>{title}</td>
						<td data-label='Description'>{description}</td>
						<td data-label='Type'>{type}</td>
						<td data-label='Actions'>{renderActions()}</td>
					</tr>
				</tbody>
			</table>
		</div>
		// <div className='statistic'>
		// 	<div className='title'>
		// 		<ul>
		// 			<li>{title}</li>
		// 			<li>{description}</li>
		// 			<li>{currentState}</li>
		// 			<li>{String(visibility)}</li>
		// 			<li>{link}</li>
		// 			<li>{unit}</li>
		// 		</ul>
		// 	</div>
		// 	{renderActions()}
		// 	<br />
		// </div>
	)
}
