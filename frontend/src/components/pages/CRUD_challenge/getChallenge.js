import axios from 'axios'
import { useEffect, useState } from 'react'
import Challenge from './challengePage'

const GetChallenges = () => {
	const [chllg, setChllg] = useState([])

	useEffect(() => {
		getChllgs()
	}, [])

	const getChllgs = async () => {
		const response = await axios.get('http://localhost:8000/challenges')
		setChllg(response.data)
	}
	return (
		<div className='App'>
			<h1>Liste des défis </h1>
			{chllg.map(function (chllgs) {
				return (
					<Challenge
						link={comps.link}
						goal={chllgs.name}
						key={chllgs._id}
					/>
				)
			})}
		</div>
	)
}
export default GetChallenges