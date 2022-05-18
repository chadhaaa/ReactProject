import axios from 'axios'
import { useEffect, useState } from 'react'
import Competence from './placePage'

const Getplaces = () => {
	const [place, setPlace] = useState([])

	useEffect(() => {
		getPlaces()
	}, [])

	const getPlaces = async () => {
		const response = await axios.get('http://localhost:8000/places')
		setPlace(response.data)
	}
	return (
		<div className='App'>
			<h1>Liste des places </h1>
			{place.map(function (places) {
				return (
					<places
						key={places._id}
						Name={places.Name}
						countryState={places.countryState}
						country={places.country}
						address={places.address}
					/>
				)
			})}
		</div>
	)
}
export default Getplaces