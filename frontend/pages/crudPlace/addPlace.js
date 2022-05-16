import axios from 'axios'
import React, { useState } from 'react'

const AddPlace = () => {
	const [place, addComp] = useState({
		Name: '',
        countryState: '',
        country: '',
        address: '',
	})

	const { Name, countryState, country, address } = place
	const handleChange = (namee) => (event) => {
		addComp({ ...place, [namee]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const dataToAdd = {
			Name,
			countryState,
			country,
			address,
		}
		await axios.post('/api/place', dataToAdd)
	}
	return (
		<>
			<h1> Add place </h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter name :
					<input
						type='text'
						placeholder="Enter place's name"
						value={Name}
						onChange={handleChange('Name')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter place s countryState :
					<input
						type='text'
						placeholder="Enter place's countryState"
						value={countryState}
						onChange={handleChange('countryState')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter place's country :
					<input
						type='text'
						placeholder="Enter place's country"
						value={country}
						onChange={handleChange('country')}
					/>
				</label>
				<br />
				<br />

				<label>
					Enter place's address :
					<input
						type='text'
						placeholder="Enter place's address"
						value={address}
						onChange={handleChange('address')}
					/>
				</label>
				<br />
				<br />

				<button type='submit' onClick={handleSubmit}>
					{' '}
					Add Place{' '}
				</button>
			</form>
		</>
	)
}

export default AddPlace