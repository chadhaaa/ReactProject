import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Event from './eventPage'

const GetEvents = () => {
	const [event, setEvent] = useState([])
	const history = useNavigate()
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		if(isLoading){
			getEvents()
			setIsLoading(false);
		}
	}, [isLoading])

	const getEvents = async () => {
		const response = await axios.get('http://localhost:8000/events')
		setEvent(response.data)
	}
	return (
		<div className='App'>
			<h1>Liste des événnements </h1>
			<button onClick={() => history('/addEvents')}> Ajouter un evennement </button>
			{isLoading ? <p>Loading...</p> :event.map(function (events) {
				return (
					<Event
						title={events.title}
						description={events.description}
						dateDebut={events.dateDebut}
						dateFin={events.dateFin}
						hour={events.hour}
						place={events.place}
						visibility={events.visibility}
						
					/>
				)
			})}
		</div>
	)
}
export default GetEvents