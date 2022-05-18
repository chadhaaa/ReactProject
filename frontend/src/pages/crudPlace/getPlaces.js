import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Place from './placePage'

const GetPlaces = () => {
	const [places, setPlaces] = useState([])
	const history = useNavigate()

	useEffect(() => {
        console.log("in use effect")
		getPlaces()
	}, [])

	const getPlaces = async () => {
		const response = await axios.get('http://localhost:8000/api/places')
		setPlaces(response.data)
        console.log(response.data)

	}
	return (
		<div className='App'>
			<h1>Places List</h1>
			<button onClick={() => history('/addPlace')}> Add New Place </button>
			{places.map(function (place) {
				return (
					<Place
						id={place._id}
						key={place._id}
						country={place.country}
						countryState={place.countryState}
						address={String(comps.address)}
					/>
				)
			})}
		</div>
	)
}
export default GetPlaces