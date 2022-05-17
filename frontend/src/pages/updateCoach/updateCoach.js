import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateCoach = () => {
	const history = useNavigate()
	const { id } = useParams()

	// DATA TO UPDATE FOR PLAYER BY COACH
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [photo, setPhoto] = useState('')
    const [sex, setSex] = useState('')

	// Operations on alerts
	const [alerts, setAlerts] = useState([])
	const [stateAlerts, setStateAlerts] = useState([])
	const [everyAlert, setEveryAlert] = useState([])
    const [isLoading, setIsLoading] = useState(true)


	const updateCoachProfile = (event) => {
		// event.preventDefault()

		const formdata = {

			firstname: firstname,
			lastname: lastname,
			email: email,
			password: password,
            birthDate: birthDate,
            photo : photo,
            sex: sex,
/*             alerts: alerts,
 */		}

		axios.put(`http://localhost:8000/api/CoachUpdate/${id}`, formdata)
       /*  alert.map((item) =>{
            axios.put(`http://localhost:8000/api/alert/${item._id}`, item)
        }) */
	}

	// Getting All alerts
    const getAlerts = async () => {
		const response = await axios.get('http://localhost:8000/api/alerts')
		setEveryAlert(response.data)
	}

	// Setting New Changes
	useEffect(() => {
		axios.get(`http://localhost:8000/api/coachUpdate/${id}`).then((res) => {
		    setFirstname(res.data.coach.firstname)
			setLastname(res.data.coach.lastname)
			setEmail(res.data.coach.email)
			setPassword(res.data.coach.password)
            setBirthDate(res.data.coach.birthDate)
            setPhoto(res.data.coach.photo)
            setSex(res.data.coach.sex)
		})
        getAlerts()

	}, [])


    // get every name from alerts
	const alert = []
	everyAlert.map((item) =>
		alert.push({
			id: item._id,
			name: item.name,
            description: item.description,
            type: item.type,
		})
	)
    const HandleChange = (e, index,attribut) => {
		alert[index].attribut =  e.target.value
	}

	return (
		<div class='form' encType='multipart/form-data'>
			<div class='title'>Update Coach Infos</div>
			<div class='input-container ic1'>
				<input
					id='Firstname'
					class='input'
					type='text'
					placeholder=' '
					value={firstname}
					onChange={(e) => setFirstname(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='Enter new first Name' class='placeholder'>
					Enter new first Name
				</label>
				<div class='input-container ic2'>
					<input
						id='Lastname'
						class='input'
						type='text'
						placeholder=' '
						value={lastname}
						onChange={(e) => setLastname(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new first Name' class='placeholder'>
						Enter new Last Name
					</label>
				</div>
				<div class='input-container ic2'>
					<input
						id='Email'
						class='input'
						type='email'
						placeholder=' '
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new Email' class='placeholder'>
						Enter new Email
					</label>
				</div>
				<div class='input-container ic2'>
					<input
						id='Password'
						class='input'
						type='password'
						placeholder=' '
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new Password' class='placeholder'>
						Enter new Password
					</label>
				</div>
				<div class='input-container ic2'>
					<input
						id='photo'
						class='input'
						type='file'
						value={photo}
						onChange={(e) => setPhoto(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Change photo' class='placeholder'>
                        Change photo
					</label>
				</div>

				<div class='input-container ic2'>
					<input
						id='birthDate'
						class='input'
						type='date'
						placeholder=' '
						value={birthDate}
						onChange={(e) => setBirthDate(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new birthdate' class='placeholder'>
                    Enter new birthdate
					</label>
				</div>

				<div class='input-container ic2'>
					<input
						id='sex'
						class='input'
						type='text'
						placeholder=' '
						value={sex}
						onChange={(e) => setSex(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new sex' class='placeholder'>
						Enter new sex
					</label>
				</div>
				<br />

				<button type='text' class='submit' onClick={() => updateCoachProfile()}>
					Update Coach
				</button>
			</div>

			<br />
		</div>
	)
}

export default UpdateCoach