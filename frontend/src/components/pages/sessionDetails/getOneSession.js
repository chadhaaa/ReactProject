import axios from 'axios'
import { useEffect, useState } from 'react'
import OneSeance from './getOneSessionPage'
import { useParams } from 'react-router-dom'

const GetOneSeance = () => {
	const [sessions, setSession] = useState(null)
	const { id } = useParams()
	useEffect(() => {
		if (id) {
			getSessions(id)
		}
	}, [id])

	const getSessions = async (id) => {
		const response = await axios.get(`http://localhost:8000/api/sessionDetails/${id}`)

		if (response.status === 200) {
			setSession({ ...response.data })
		}
	}

	return (
		<div className='App'>
			<h1>Liste des seances </h1>
			<OneSeance
				id={sessions && sessions._id}
				key={sessions && sessions._id}
				day={sessions && sessions.day}
				locationId={sessions && sessions.locationId}
				cancellation={sessions && sessions.cancellation}
				reason={sessions && sessions.reason}
				feedback={sessions && sessions.feedback}
				hour={sessions && sessions.hour}
				programId={sessions && sessions.programId}
			/>
		</div>
	)
}
export default GetOneSeance
