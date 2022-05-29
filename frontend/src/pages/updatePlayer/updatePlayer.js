import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './updatePlayer.css'

const UpdatePlayer = () => {
	const history = useNavigate()
	const { id } = useParams()

	// DATA TO UPDATE FOR PLAYER BY COACH
	const [sessionPrice, setSessionPrice] = useState('')
	const [sessionNumbers, setSessionNumbers] = useState('')
	const [firstname, setFirstname] = useState('')
	const [lastname, setLastname] = useState('')
	const [tel, setTel] = useState('')
	const [height, setHeight] = useState('')
	const [weight, setWeight] = useState('')
	const [country, setCountry] = useState('')
	const [scholar, setScholar] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [active, setActive] = useState(false)
	const  [loading,setLoading] = useState(true)
	const  [loading2,setLoading2] = useState(true)
	const  [loading3,setLoading3] = useState(true)

	// Operations on Competences
	const [comp, setComp] = useState([])
	const [stateComps, setStateComps] = useState([])
	const [everyComp, setEveryComp] = useState([])

	// Operations on Statistics
	const [stats, setStats] = useState([])
	const [stateStats, setStateStats] = useState([])
	const [everyStat, setEveryStat] = useState([])

	const updateProfile = (event) => {
		// event.preventDefault()

		const formdata = {
			sessionPrice: sessionPrice,
			sessionNumbers: sessionNumbers,
			firstname: firstname,
			lastname: lastname,
			tel: tel,
			height: height,
			weight: weight,
			country: country,
			scholar: scholar,
			email: email,
			password: password,
			stats: stateStats,
			comp: stateComps,
			active: active,
		}

		axios.put(`http://localhost:8000/api/playerUpdate/${id}`, formdata)

		history(`/Profile/${id}`)
	}

	// Getting All Competences
	useEffect(() => {
		if(loading2){
			axios.get('http://localhost:8000/api/competences').then((response) => {
				setEveryComp(response.data)
				console.log('test', response.data)
				setLoading2(false)

			})
		}
		
	}, [loading2])

	// Getting All Statistics
	useEffect(() => {
		if(loading3){
			axios.get(`http://localhost:8000/api/statistics/${id}`).then((response) => {
				setEveryStat(response.data)
				setLoading3(false)
			})
		}
		
	}, [loading3])

	// Setting New Changes
	useEffect(() => {
		if(loading){
			axios.get(`http://localhost:8000/api/viewProfile/${id}`).then((res) => {
				console.log({response : {...res}})
				setSessionPrice(res.data.player.sessionPrice)
				setSessionNumbers(res.data.player.sessionNumbers)
				setFirstname(res.data.player.firstname)
				setLastname(res.data.player.lastname)
				setTel(res.data.player.tel)
				setHeight(res.data.player.height)
				setWeight(res.data.player.weight)
				setCountry(res.data.player.country)
				setScholar(res.data.player.scholar)
				setEmail(res.data.player.email)
				setPassword(res.data.player.password)
				setActive(res.data.player.active)
				setComp(res.data.comp)
				setStats(res.data.stats)
				setLoading(false)

			}).catch(err=>{
				console.log(err)
				setLoading(false)

			})
		}
		
	}, [loading])

	// Toggle Activity By Coach To Mark Player As Active Or Not
	const changeActivityPlayer = () => {
		setActive(!active)
	}

	// Getting The Names From Every Competence In The List
	const competence = []
	everyComp.map((item) =>
		competence.push({
			id: item._id,
			name: item.name,
			checked: true,
		})
	)

	// Checkbox Function For Competence : To Update Value
	const chooseComp = (e) => {
		if (e.target.checked) {
			stateComps.push(e.target.value)
		} else {
			const index = stateComps.indexOf(e.target.value)
			if (index > -1) {
				stateComps ? stateComps.splice(index, 1) : []
			}
		}
	}

	// Getting The Types From Every Statistic In The List
	const statistic = []
	everyStat.map((item) =>
		statistic.push({
			id: item._id,
			type: item.type,
			checked: true,
		})
	)

	// Checkbox Function For Statistic : To Update Value
	const chooseStat = (e) => {
		if (e.target.checked) {
			stateStats.push(e.target.value)
		} else {
			const index = stateStats.indexOf(e.target.value)
			if (index > -1) {
				stateStats ? stateStats.splice(index, 1) : []
			}
		}
	}

	return (
		<div class='form' encType='multipart/form-data'>
			<div class='title'>Update Player Infos</div>
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
						id='Telephone'
						class='input'
						type='number'
						placeholder=' '
						value={tel}
						onChange={(e) => setTel(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new Telephone Number' class='placeholder'>
						Enter new Telephone Number
					</label>
				</div>

				<div class='input-container ic2'>
					<input
						id='Height'
						class='input'
						type='number'
						placeholder=' '
						value={height}
						onChange={(e) => setHeight(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new Height' class='placeholder'>
						Enter new Height
					</label>
				</div>

				<div class='input-container ic2'>
					<input
						id='Weight'
						class='input'
						type='number'
						placeholder=' '
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new Height' class='placeholder'>
						Enter new Weight
					</label>
				</div>

				<div class='input-container ic2'>
					<input
						id='Scholar'
						class='input'
						type='text'
						placeholder=' '
						value={scholar}
						onChange={(e) => setScholar(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new Scholar' class='placeholder'>
						Enter new Scholar
					</label>
				</div>

				<div class='input-container ic2'>
					<input
						id='country'
						class='input'
						type='text'
						placeholder=' '
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter new Country' class='placeholder'>
						Enter new Country
					</label>
				</div>

				<div class='input-container ic2'>
					<input
						id='Session Numbers'
						class='input'
						type='number'
						placeholder=' '
						value={sessionNumbers}
						onChange={(e) => setSessionNumbers(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter New Session Numbers' class='placeholder'>
						Enter New Session Numbers
					</label>
				</div>
				<div class='input-container ic2'>
					<input
						id='Session Price'
						class='input'
						type='number'
						placeholder=' '
						value={sessionPrice}
						onChange={(e) => setSessionPrice(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter New Session Price' class='placeholder'>
						Enter New Session Price
					</label>
				</div>
				<h4>Is this Player Active ?</h4>
				<label class='toggle-switch'>
					<input type='checkbox' checked={active} onChange={changeActivityPlayer} />
					<span class='switch' />
				</label>
				<br />
				<table class='center'>
					{' '}
					<tr>
						<td>
							<h3>Choose Competences</h3>
							{competence.map((item, index) => (
								<div key={index}>
									<input
										value={item.id}
										type='checkbox'
										name='comp'
										checked={competence.checked}
										onChange={chooseComp}
									/>
									<label class='labelStatComp' for='Choose New Competence'>
										{item.name}
									</label>
								</div>
							))}
						</td>
						<td>
							<h3>Choose Statistics</h3>
							{statistic.length ==0  ?'no stats ':  statistic.map((item, index) => (
								<div key={index}>
									<input
										value={item.id}
										type='checkbox'
										name='stats'
										checked={statistic.checked}
										onChange={chooseStat}
									/>
									<label class='labelStatComp' for='Choose New Statistic'>
										{item.type}
									</label>
								</div>
							))}
						</td>
					</tr>
				</table>

				<button type='text' class='submit' onClick={() => updateProfile()}>
					Update Player
				</button>
			</div>

			<br />
		</div>
	)
}

export default UpdatePlayer
