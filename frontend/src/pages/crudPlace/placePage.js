import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Place({ id,country,countryState,address }) {
	const history = useNavigate()

	const deletePlace = async (event) => {
		event.preventDefault()
		await axios.delete(`/api/place/${id}`)
		history('/getPlaces')
		window.location.reload(false)
	}

	function renderActions() {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updatePlace/${id}`)}>UPDATE</button>
				<button onClick={() => history(`/getPlace/${id}`)}>VIEW MORE</button>
				<button onClick={deletePlace}> DELETE</button>
			</div>
		)
	}

	return (
		<div class='container'>
			<table>
				<thead>
					<tr>
						<th scope='col'>Country</th>
						<th scope='col'>Country State</th>
						<th scope='col'>Address</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label='Country'>{country}</td>
						<td data-label='Country State'>{countryState}</td>
						<td data-label='Address'>{address}</td>
						<td data-label='Actions'>{renderActions()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}