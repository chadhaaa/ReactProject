import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import OneEvent from './getOneEventPage'
import ReactStars from 'react-stars'

const GetOneEvent = () => {
	const [event, setEvent] = useState([])
	const { id } = useParams()
	const history = useNavigate()

	const getEvent = async () => {
		await axios.get(`http://localhost:8000/api/event/${id}`).then((response) => {
			setEvent(response.data.event)
		})
	}
	useEffect(() => {
		getEvent()
	}, [])

	return (
		<div>
			<table>
				<OneEvent
					id={event._id}
					title={event.title}
					description={event.description}
					dateDebut={event.dateDebut}
					dateFin={event.dateFin}
					cancellation={event.cancellation}
					hour={event.hour}
					place={event.place}
				/>
			</table>
			<br />
			<button type='text' class='submit' onClick={() => history('/eventList')}>
				{' '}
				BACK{' '}
			</button>
		</div>
	)
}
export default GetOneEvent
