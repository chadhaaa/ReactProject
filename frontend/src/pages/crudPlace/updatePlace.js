import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

const UpdatePlace = () => {
	const history = useNavigate()
	const { id } = useParams()

	const [country, setCountry] = useState('')
	const [countryState, setCountryState] = useState('')
	const [address, setAddress] = useState('')


	const updatePlace = (event) => {
		const formdata = {
			country: country,
			countryState: countryState,
			address: address,
		}
		axios.put(`http://localhost:8000/api/place/${id}`, formdata)

		history('/getPlaces')
	}

	useEffect(() => {
		axios.get(`http://localhost:8000/api/place/${id}`).then((res) => {
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
			<button type='text' class='submit' onClick={updatePlace}>
				Update place
			</button>
			<button type='text' class='submit' onClick={() => history('/getPlaces')}>
				BACK
			</button>
		</div>
	)
}

export default UpdatePlace