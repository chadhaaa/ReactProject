import axios from 'axios'
import { useEffect, useState ,} from 'react'
import { useNavigate } from 'react-router-dom'



const GetPlaces = () => {
    const history = useNavigate()

	const [places, setPlaces] = useState([])
	useEffect(() => {
		getPlaces()
	}, [])


    const deletePlace = async (id) => {
		await axios.delete(`http://localhost:8000/api/place/${id}`)
		history('/places')
		window.location.reload(false)
	}
	const getPlaces = async () => {
		const response = await axios.get('http://localhost:8000/api/places')
		setPlaces(response.data)
	}
    function renderActions(id) {
		return (
			<div className='actions'>
				<button onClick={() => history(`/updatePlace/${id}`)}>UPDATE</button>
                <button onClick={() => deletePlace(id)}>DELETE</button>
			</div>
		)
	}
	return (
        <>
            <table>
			<caption>Places List</caption>
			{places.map(function (place) {
				return (
					<table>
                        <tr>
                            <th scope='col'>Country</th>
                            <th scope='col'>Country State</th>
                            <th scope='col'>Address</th>
                        </tr>
						<tr>
                            <td>{place.country}</td>
                            <td>{place.countryState}</td>
                            <td>{(place.address)}</td>
                            <td data-label='Actions'>{renderActions(place._id)}</td>

                            
						</tr>
					</table>
				)
			})}
		</table>
        <button onClick={() => history('/places')}> Add New Place </button>

        </>
		
	)
}
export default GetPlaces