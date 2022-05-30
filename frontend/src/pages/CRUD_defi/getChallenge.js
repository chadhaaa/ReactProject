import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Challenge from './challengePage'

const GetAllChallenges = () => {
	const [chllg, setChllg] = useState([])
	const history = useNavigate()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (isLoading) {
			getChllgs()
			setIsLoading(false)
		}
	}, [isLoading])

	const getChllgs = async () => {
		const response = await axios.get('http://localhost:8000/api/challenges')
		setChllg(response.data)
	}
	return (
		<div className='App'>
			<h1>Liste des défis </h1>
			<button onClick={() => history('/addChallenge')}> Ajouter un défi </button>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				chllg.map(function (chllgs) {
					return (
						<Challenge link={chllgs.link} goal={chllgs.name} key={chllgs._id} id={chllgs._id} />
					)
				})
			)}
		</div>
	)
}
export default GetAllChallenges
