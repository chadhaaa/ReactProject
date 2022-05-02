import axios from 'axios'
import { useEffect, useState } from 'react'
import OneSeance from './getOneSessionPage'
import { useParams, useNavigate } from 'react-router-dom'

const GetOneSeance = () => {
	const [session, setSession] = useState([])
	const [place, setPlace] = useState([])
	const [programs, setProgram] = useState([])
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
	console.log('prog', programs)
	console.log('place', place)

	useEffect(() => {
		getSession()
	}, [])

	return (
		<div>
			<table>
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
						{place && place?.length === 0 ? (
							<tr>
								<td>
									<strong> No data </strong>
								</td>
							</tr>
						) : (
							<table>
								<tr>
									<td>
										<strong> Title : </strong>
									</td>
									<td> {place.name} </td>
								</tr>
								<tr>
									<td>
										<strong>Country State :</strong>{' '}
									</td>
									<td> {place.countryState} </td>
								</tr>
								<tr>
									<td>
										<strong>Country : </strong>
									</td>
									<td> {place.country} </td>
								</tr>
								<tr>
									<td>
										<strong>Address : </strong>
									</td>
									<td> {place.address} </td>
								</tr>
							</table>
						)}
					</td>
				</tr>

				<tr>
					<th>Competences</th>
					<td>
						{comp && comp?.length === 0 ? (
							<tr>
								<td>
									<strong> No data </strong>
								</td>
							</tr>
						) : (
							comp.map((item, index) => (
								<table>
									<tr>
										<td>
											<strong>Title :</strong>
										</td>
										<td> {item.compId.name} </td>
									</tr>
									<tr>
										<td>
											<strong>Description :</strong>
										</td>
										<td> {item.compId.description} </td>
									</tr>
									<tr>
										<td>
											<strong> Link : </strong>
										</td>
										<td> {item.compId.link} </td>
									</tr>
								</table>
							))
						)}
					</td>
				</tr>
				<tr>
					<th>Statistics</th>
					<td>
						{stat && stat?.length === 0 ? (
							<tr>
								<td>
									<strong> No data </strong>
								</td>
							</tr>
						) : (
							stat.map((item, index) => (
								<table>
									<tr>
										<td>
											<strong> Title : </strong>
										</td>
										<td> {item.statId.title} </td>
									</tr>
									<tr>
										<td>
											<strong> Unit : </strong>
										</td>
										<td> {item.statId.unit} </td>
									</tr>
									<tr>
										<td>
											<strong> Type : </strong>
										</td>
										<td> {item.statId.type} </td>
									</tr>
									<tr>
										<td>
											<strong>Description : </strong>
										</td>
										<td> {item.statId.description} </td>
									</tr>
									<tr>
										<td>
											<strong>Current State :</strong>
										</td>
										<td> {item.statId.currentState} </td>
									</tr>
								</table>
							))
						)}
					</td>
				</tr>
				<tr>
					<th>Program</th>
					<td>
						{programs && programs?.length === 0 ? (
							<tr>
								<td>
									<strong> No data</strong>
								</td>
							</tr>
						) : (
							<table>
								<tr>
									<td>
										{' '}
										<strong>Title : </strong>{' '}
									</td>
									<td> {programs && programs.title} </td>
								</tr>
								<tr>
									<td>
										{' '}
										<strong>Description : </strong>
									</td>
									<td> {programs && programs.description} </td>
								</tr>
								<tr>
									<td>
										<strong> Link : </strong>
									</td>
									<td> {programs && programs.link} </td>
								</tr>
								<tr>
									<td>
										{' '}
										<strong> Picture :</strong>
									</td>
									<td>
										<img
											src={`//localhost:8000/${programs && programs.picture}`}
											alt=''
											width='300'
											height='200'
										/>
									</td>
								</tr>
							</table>
						)}
					</td>
				</tr>
			</table>
			<br />
			<button type='text' class='submit' onClick={() => history('/sessionList')}>
				{' '}
				BACK{' '}
			</button>
		</div>
	)
}
export default GetOneSeance
