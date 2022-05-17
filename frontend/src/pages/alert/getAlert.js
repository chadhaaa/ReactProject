import axios from 'axios'
import { useEffect, useState } from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils'
import { useNavigate } from 'react-router-dom'
import Alert from './alertPage'

const GetAlerts = () => {
	const [alert, setAlert] = useState([])
	const history = useNavigate()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {

		if(isLoading){
			getAlerts()
			setIsLoading(false);
		}
	}, [isLoading])

	const getAlerts = async () => {
		const response = await axios.get('http://localhost:8000/api/alerts')
		setAlert(response.data)
	}
	return (
		<div className='App'>
			<h1>Liste des alert {alert.length} </h1>
			{ isLoading ? <p>Loading...</p> : alert.map(function (alerts) {
				
				return (
					<Alert
						id={alerts._id}
						key={alerts._id}
						name={alerts.name}
						description={alerts.description}
						idCoach={alerts.idCoach}
						type = {alerts.type}
					/>
				)
			})}
		</div>
	)
}
export default GetAlerts
