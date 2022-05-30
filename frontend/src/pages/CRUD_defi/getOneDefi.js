import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const GetOneChallenge = () => {
	const [oneChllg, setoneChllg] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const { id } = useParams()
	const history = useNavigate()

	useEffect(() => {
		if (isLoading) {
			getoneChllg()
			setIsLoading(false)
		}
	}, [isLoading])
	const getoneChllg = async () => {
		const response = await axios.get(`/api/challenge/${id}`)
		setoneChllg(response.data)
	}
	return (
		<section>
			<div className='App'>
				<h1 key={oneChllg._id}>Details of Challenge : {oneChllg.goal} </h1>
				<br />
				<ul className='check-list'>
					<li>Objectif : {oneChllg.goal}</li>
					<br />
					<li>Lien video : {oneChllg.link}</li>
					<br />
				</ul>
				<button onClick={() => history('/challenge')}> BACK </button>
			</div>
		</section>
	)
}
export default GetOneChallenge
