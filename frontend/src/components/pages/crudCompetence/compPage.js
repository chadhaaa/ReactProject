import './competence.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Competence({ name, description, link, visibility, id }) {
	const history = useNavigate()

	const deleteCompetence = async (event) => {
		event.preventDefault()
		await axios.delete(`/api/competence/${id}`)
		history('/addCompetence')
	}

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updateCompetence/${id}`)}>UPDATE</button>
				<button onClick={deleteCompetence}> DELETE</button>
			</div>
		)
	}

	return (
		<div className='competence'>
			<div className='title'>
				<ul>
					<li>{name}</li>
					<li>{description}</li>
					<li>{visibility}</li>
					<li>{link}</li>
				</ul>
			</div>
			{renderActions()}
			<br />
			<button onClick={() => history('/addCompetence')}> Add New Competence </button>
		</div>
	)
}
