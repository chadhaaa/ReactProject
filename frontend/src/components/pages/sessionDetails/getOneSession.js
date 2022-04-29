import axios from 'axios'
import { useEffect, useState } from 'react'
import OneSeance from './getOneSessionPage'
import { useParams, useNavigate } from 'react-router-dom'

const GetOneSeance = () => {
	const [session, setSession] = useState([])
	const [place, setPlace] = useState([])
	const [program, setProgram] = useState([])
	const [stat, setStat] = useState([])
	const [comp, setComp] = useState([])

	const { id } = useParams()
	const history = useNavigate()

	const getSession = async () => {
		await axios.get(`http://localhost:8000/api/sessionDetails/${id}`).then((response) => {
			setSession(response.data.session)
			setPlace(response.data.session.idPlace)
			setProgram(response.data.session.programId)
			setStat(response.data.stats)
			setComp(response.data.comp)
		})
	}

	// console.log(session)
	// console.log('stat', stat)
	// console.log('comp', comp)
	console.log('prog', program)
	useEffect(() => {
		getSession()
	}, [])

	return (
		<div>
			<table className='fl-table'>
				<OneSeance
					id={session._id}
					reason={session.reason}
					day={session.day}
					feedback={session.feedback}
					cancellation={session.cancellation}
					hour={session.hour}
				/>

				<tr>
					<th> Place of Session</th>
					<td>
						<table>
							<tr>
								<td> Title : </td>
								<td> {place.name} </td>
							</tr>
							<tr>
								<td> Country State : </td>
								<td> {place.countryState} </td>
							</tr>
							<tr>
								<td> Country : </td>
								<td> {place.country} </td>
							</tr>
							<tr>
								<td> Address : </td>
								<td> {place.address} </td>
							</tr>
						</table>
					</td>
				</tr>

				<tr>
					<th>Competences</th>
					<td>
						{comp.map((item, index) => (
							<table>
								<tr>
									<td> Title : </td>
									<td> {item.compId.name} </td>
								</tr>
								<tr>
									<td> Description : </td>
									<td> {item.compId.description} </td>
								</tr>
								<tr>
									<td> Link : </td>
									<td> {item.compId.link} </td>
								</tr>
							</table>
						))}
					</td>
				</tr>
				<tr>
					<th>Statistics</th>
					<td>
						{stat.map((item, index) => (
							<table>
								<tr>
									<td> Title : </td>
									<td> {item.statId.title} </td>
								</tr>
								<tr>
									<td> Unit : </td>
									<td> {item.statId.unit} </td>
								</tr>
								<tr>
									<td> Type : </td>
									<td> {item.statId.type} </td>
								</tr>
								<tr>
									<td> Description : </td>
									<td> {item.statId.description} </td>
								</tr>
								<tr>
									<td> Current State : </td>
									<td> {item.statId.currentState} </td>
								</tr>
							</table>
						))}
					</td>
				</tr>
			</table>
			<button onClick={() => history('/sessionList')}> BACK </button>
		</div>
	)
}
export default GetOneSeance
