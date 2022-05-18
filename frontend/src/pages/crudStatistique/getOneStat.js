import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import './oneStat.css'

const GetOneStatistic = () => {
	const [oneStat, setOneStat] = useState([])
	const { id } = useParams()
	const history = useNavigate()

	useEffect(() => {
		getOneStat()
	}, [])

	const getOneStat = async () => {
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
					<li>unit : {oneStat.unit && oneStat.unit[0].value}</li>
					<br />
					<li>type : {oneStat.type && oneStat.type[0].value}</li>

					<br />
					<li>Visibility : {String(oneStat.visibility)}</li>
					<br />
					<li>current State : {oneStat.currentState}</li>
					<br />
					<li>Show alert : {String(oneStat.statAlert)}</li>
					<br />
					<li>Min or Max: {oneStat.minMax && oneStat.minMax[0].value}</li>
					<br />
				</ul>
				<button onClick={() => history('/getStat')}> BACK </button>
			</div>
		</section>
	)
}
export default GetOneStatistic
