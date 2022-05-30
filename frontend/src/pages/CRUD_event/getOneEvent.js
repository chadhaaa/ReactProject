import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const GetOneEvent = () => {
	const [oneEvent, setoneEvent] = useState([])
	const { id } = useParams()
	const history = useNavigate()

	useEffect(() => {
		if(isLoading){
            getoneEvent()
			setIsLoading(false);
		}
	}, [isLoading])
	const getoneEvent = async () => {
		const response = await axios.get(`/api/event/${id}`)
		setoneEvent(response.data)
	}
	return (
		<section>
			<div className='App'>
				<h1 key={oneEvent._id}>Details of Event : {oneEvent.title} </h1>
				<br />
				<ul className='check-list'>
					<li>Title : {oneEvent.title}</li>
					<br />
					<li>Description : {oneEvent.description}</li>
					<br />
					<li>Date début : {oneEvent.dateDebut}</li>
					<br />
                    <li>Date fin : {oneEvent.dateFin}</li>
					<br />
                    <li>Heur : {oneEvent.hour}</li>
					<br />
                    <li>Emplacement : {oneEvent.place}</li>
					<br />
					<li>Visibility : {String(oneEvent.visibility)}</li>
					<br />
				</ul>
				<button onClick={() => history('/event')}> BACK </button>
			</div>
		</section>
	)
}
export default GetOneEvent