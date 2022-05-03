import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './oneStat.css'
const GetOneStatistic = () => {
	const [oneStat, setOneStat] = useState([])
	const { id } = useParams()
	const history = useNavigate()

	useEffect(() => {
		getOneComp()
	}, [])

	const getOneComp = async () => {
		const response = await axios.get(`/api/statistic/${id}`)
		setOneStat(response.data)
	}
	return (
		<section>
			<div className='App'>
				<h1 key={oneStat._id}>Details of statistic : {oneStat.title} </h1>
				<br />
				<ul className='check-list'>
					<li>description : {oneStat.description}</li>
					<br />
					<li>link : {oneStat.link}</li>
					<br />
					<li>unit : {oneStat.unit}</li>
					<br />
					<li>type : {oneStat.type}</li>
					<br />
					<li>current State : {oneStat.currentState}</li>
					<br />
				</ul>
				<button onClick={() => history('/getStat')}> BACK </button>
			</div>
		</section>
	)
}
export default GetOneStatistic
