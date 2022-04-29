import './competence.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Competence({ name, description, link, visibility, id }) {
	const history = useNavigate()

	const deleteCompetence = async (event) => {
		event.preventDefault()
		await axios.delete(`/api/competence/${id}`)
		history('/getCompetence')
		window.location.reload(false)
	}

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updateCompetence/${id}`)}>UPDATE</button>
				<button onClick={() => history(`/compDetails/${id}`)}>VIEW MORE</button>
				<button onClick={deleteCompetence}> DELETE</button>
			</div>
		)
	}

	return (
		<div class='container'>
			<table>
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Description</th>
						<th scope='col'>Link</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label='Title'>{name}</td>
						<td data-label='Description'>{description}</td>
						<td data-label='Type'>{link}</td>
						<td data-label='Actions'>{renderActions()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
