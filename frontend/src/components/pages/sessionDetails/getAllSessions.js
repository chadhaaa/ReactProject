import axios from 'axios'
import { useEffect, useState } from 'react'
import Seance from './sessionDetails'

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
		<div className='App'>
			<h1>Sessions List</h1>
			{sessions.map(function (session) {
				return (
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
				)
			})}
		</div>
	)
}
export default GetSeance
