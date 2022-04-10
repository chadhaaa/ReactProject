import axios from 'axios'
import { useEffect, useState } from 'react'
import Statistic from './statPage'

const GetStatistics = () => {
	const [stats, setStat] = useState([])

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
			{stats.map(function (stats) {
				return (
					<Statistic
						id={stats._id}
						key={stats._id}
						title={stats.title}
						description={stats.description}
						currentState={stats.currentState}
						link={stats.link}
						visibility={stats.visibility}
					/>
				)
			})}
		</div>
	)
}
export default GetStatistics