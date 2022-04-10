import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePlace = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [place, addPlace] = useState({
		Name: '',
		countryState: '',
		coountry: '',
		address: '',
		
	})

	const { Name, countryState, coountry, address } = place
	const handleChange = (namee) => (event) => {
		addComp({ ...place, [namee]: event.target.value })
	}

	const updatePlace = async (event) => {
		event.preventDefault()

		await axios.put(`/api/place/${id}`, place)
		//badel l link hasb eli aandek baad fel code besh temshilou baad update
		history('/getPlace')
	}
	return (
		<>
			<h1> Update place </h1>
			<form onSubmit={updateplace}>
				<label>
					Enter new Name :
					<input
						type='text'
						placeholder="Enter new place's Name"
						value={Name}
						onChange={handleChange('Name')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new place s countryState :
					<input
						type='text'
						placeholder="Enter new place's countryState"
						value={countryState}
						onChange={handleChange('countryState')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new place s country :
					<input
						type='text'
						placeholder="Enter new place's country"
						value={country}
						onChange={handleChange('country')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter new place s address :
					<input
						type='text'
						placeholder="Enter new place's address"
						value={address}
						onChange={handleChange('address')}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={updateplace}>
					{' '}
					Update Place{' '}
				</button>
			</form>
		</>
	)
}

export default UpdatePlace

