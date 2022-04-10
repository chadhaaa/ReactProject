import axios from 'axios'
import { useEffect, useState } from 'react'
import Profile from './profilePage'
import { useParams } from 'react-router-dom'
const GetProfile = () => {
	const [profil, setProfile] = useState(null)
	const { id } = useParams()
	useEffect(() => {
		if (id) {
			getProfile(id)
		}
	}, [id])

	const getProfile = async (id) => {
		const response = await axios.get(`http://localhost:8000/api/viewProfile/${id}`)

		if (response.status === 200) {
			setProfile({ ...response.data })
		}
	}

	return (
		<div className='App'>
			<h1>Profile </h1>
			<Profile
				id={profil && profil._id}
				key={profil && profil._id}
				firstname={profil && profil.firstname}
				lastname={profil && profil.lastname}
				picture={profil && profil.picture}
				weight={profil && profil.weight}
				height={profil && profil.height}
				goal={profil && profil.goal}
			/>
		</div>
	)
}
export default GetProfile
