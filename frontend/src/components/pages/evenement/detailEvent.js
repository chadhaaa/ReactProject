import { useNavigate, Link } from 'react-router-dom'
import './allSessions.css'

export default function event({
	titre,
	description,
	dateDebut,
    dateFin,
    hour,
	place,
	visibility,
	idCoach,
	id,
}) {
	const history = useNavigate()

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/oneEvent/${id}`)}>VIEW MORE</button>
			</div>
		)
	}

	return (
		<table>
			<tr>
				<th scope='col'>Titre</th>
				<th scope='col'>Description</th>
				<th scope='col'>Date Debut</th>
                <th scope='col'>Date fin</th>
                <th scope='col'>Heur</th>
                <th scope='col'>place</th>
             
				<th scope='col'>Action</th>
			</tr>

			<tbody>
				<tr>
					<td data-label='titre'>{titre}</td>
					<td data-label='description'>{description}</td>
					<td data-label='date Debut'>{dateDebut}</td>
                    <td data-label='date Fin'>{dateFin}</td>
                    <td data-label='heur'>{hour}</td>
                    <td data-label='Emplacement'>{place}</td>
               
					<td data-label='Action'>{renderActions()}</td>
				</tr>
			</tbody>
		</table>
	)
}