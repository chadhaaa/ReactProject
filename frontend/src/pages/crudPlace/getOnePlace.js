import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const GetOnePlace = () => {
	const [onePlace, setOnePlace] = useState([])
	const { id } = useParams()
	const history = useNavigate()

	useEffect(() => {
		getOnePlace()
	}, [])

	const getOnePlace = async () => {
		const response = await axios.get(`/api/place/${id}`)
		setOnePlace(response.data)
	}
	return (
		<section>
			<div className='App'>
				<ul className='check-list'>
					<li>Country : {onePlace.country}</li>
					<br />
					<li>Country State : {onePlace.countryState}</li>
					<br />
					<li>Address : {onePlace.address}</li>
					<br />
				</ul>
				<button onClick={() => history('/getPlaces')}> BACK </button>
			</div>
		</section>
	)
}
export default GetOnePlace