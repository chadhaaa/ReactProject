import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPlace = () => {
	const history = useNavigate()

	const [country, setCountry] = useState('')
	const [countryState, setCountryState] = useState('')
	const [address, setAddress] = useState('')

	const addPlace = (event) => {
		const formdata = {
            country: country,
			countryState: countryState,
			address: address,
		}
		axios.post('http://localhost:8000/api/place', formdata)

		history('/getplaces')
	}

	useEffect(() => {
		axios.get('http://localhost:8000/api/places').then((res) => {
			setCountry(res.data.competence.country)
			setCountryState(res.data.competence.countryState)
			setAddress(res.data.competence.address)
		})
	}, [])

	return (
		<div class='form' encType='multipart/form-data'>
			<div class='title'>Update Place</div>
			<div class='input-container ic1'>
				<input
					id='country'
					class='input'
					type='text'
					placeholder=' '
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='Country' class='placeholder'>
					Country
				</label>
			</div>
			<div class='input-container ic2'>
				<input
					id='countryState'
					class='input'
					type='text'
					placeholder=' '
					value={countryState}
					onChange={(e) => setCountryState(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='Country State' class='placeholder'>
                 Country State
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='address'
					class='input'
					type='text'
					placeholder=' '
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='address' class='placeholder'>
					Address
				</label>
			</div>
			<br />
			<button type='text' class='submit' onClick={addPlace}>
				Add Place
			</button>
			<button type='text' class='submit' onClick={() => history('/getPlaces')}>
				BACK
			</button>
		</div>
	)
}

export default AddPlace