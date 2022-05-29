import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Statistic from './statPage'
import './stat.css'

const GetStatistics = () => {
	const [stats, setStat] = useState([])
	const history = useNavigate()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		if (loading) {
			getStats()
			setLoading(false)
		}
	}, [loading])

	const getStats = async () => {
		const response = await axios.get('http://localhost:8000/api/statistics')
		console.log(response.data)
		setStat(response.data)
		console.log(response.data)
	}
	if (loading) return <h1>loading ...</h1>
	return (
		<div className='App'>
			<h1>Liste des statistiques </h1>
			<button onClick={() => history('/addStat')}> Add New Statistic </button>
			{/* {stats.forEach((element) => {
				// console.log(element.minMax[0].value)
				console.log(element.unit[0].value)
			})} */}

			{stats.length == 0
				? 'No stats available'
				: stats.map((el) => {
						console.log('test', el.minMax[0] && el.minMax[0].value)
				  })}

			{stats.length == 0
				? 'No stats available'
				: stats.map(function (stats) {
						return (
							<Statistic
								id={stats._id}
								key={stats._id}
								title={stats?.title}
								type={stats.type[0] && stats?.type[0].value}
								description={stats?.description}
								currentState={stats?.currentState}
								link={stats?.link}
								visibility={String(stats?.visibility)}
								unit={stats.unit[0] && stats?.unit[0].value}
								minMax={stats.minMax[0] && stats?.minMax[0].value}
								statAlert={String(stats?.statAlert)}
							/>
						)
				  })}
		</div>
	)
}
export default GetStatistics
