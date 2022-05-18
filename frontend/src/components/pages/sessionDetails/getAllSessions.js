import axios from 'axios'
import { useEffect, useState } from 'react'
import Seance from './sessionDetails'
import './allSessions.css'

const GetSeance = () => {
	const [sessions, setSession] = useState([])
	useEffect(() => {
		getSessions()
	}, [])

	const getSessions = async () => {
		const response = await axios.get('http://localhost:8000/api/sessionSDetails')
		setSession(response.data)
	}
	return (
		<table>
			<caption>Sessions List</caption>
			{sessions.map(function (session) {
				return (
					<table>
						<tr>
							<Seance
								id={session._id}
								key={session._id}
								day={session.day}
								idPlace={session.idPlace}
								cancellation={session.cancellation}
								reason={session.reason}
								feedback={session.feedback}
								hour={session.hour}
								programId={session.programId}
							/>
						</tr>
					</table>
				)
			})}
		</table>
	)
}
export default GetSeance
