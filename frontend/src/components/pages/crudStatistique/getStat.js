import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Statistic from './statPage'
import './stat.css'

const GetStatistics = () => {
	const [stats, setStat] = useState([])
	const history = useNavigate()

	useEffect(() => {
		getStats()
	}, [])

	const getStats = async () => {
		const response = await axios.get('http://localhost:8000/api/statistics')
		setStat(response.data)
	}
	return (
		<div className='App'>
			<h1>Liste des statistiques </h1>
			<button onClick={() => history('/addStat')}> Add New Statistic </button>

			{stats.map(function (stats) {
				return (
					<Statistic
						id={stats._id}
						key={stats._id}
						title={stats.title}
						type={stats.type}
						description={stats.description}
						currentState={stats.currentState}
						link={stats.link}
						visibility={stats.visibility}
						unit={stats.unit}
					/>
				)
			})}
		</div>
	)
}
export default GetStatistics
