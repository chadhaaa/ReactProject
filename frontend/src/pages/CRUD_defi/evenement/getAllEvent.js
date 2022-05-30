import axios from 'axios'
import { useEffect, useState } from 'react'
import Event from './detailEvent'
import './allEvents.css'

const GetEventDetails = () => {
	const [Events, setEvent] = useState([])
	useEffect(() => {
		getEvents()
	}, [])

	const getEvents = async () => {
		const response = await axios.get('http://localhost:8000/api/events')
		setEvent(response.data)
	}
	return (
		<div className='allEvents'>
			<table>
				<caption> Liste des évennement</caption>
				{Events.map(function (event) {
					return (
						<table>
							<tr>
								<Event
									id={event._id}
									title={event.title}
									description={event.description}
									dateDebut={event.dateDebut}
									dateFin={event.dateFin}
									cancellation={event.cancellation}
									hour={event.hour}
									place={event.place}
								/>
							</tr>
						</table>
					)
				})}
			</table>
		</div>
	)
}
export default GetEventDetails
