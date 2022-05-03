import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './updatePlayer.css'

const UpdatePlayer = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [sessionPrice, setSessionPrice] = useState('')
	const [sessionNumbers, setSessionNumbers] = useState('')
	const [active, setActive] = useState(false)
	// const [comp, setComp] = useState([])
	// const [compState, setCompState] = useState([])
	// const [compsAll, setCompsAll] = useState([])
	// const [stats, setStats] = useState([])
	// const [statsState, setStatsState] = useState([])
	// const [statsAll, setStatsAll] = useState([])
	const [errors, setErrors] = useState({})
	console.log('hhihih', sessionNumbers)

	const updateProfile = (event) => {
		// event.preventDefault()

		const formdata = new FormData()
		formdata.append('sessionPrice', sessionPrice)
		formdata.append('sessionNumbers', sessionNumbers)
		formdata.append('active', active)

		console.log('formdata', formdata)

		axios.put(`http://localhost:8000/api/player/${id}`, formdata, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		history(`/Profile/${id}`)
	}

	useEffect(() => {
		axios.get(`http://localhost:8000/api/player/${id}`).then((res) => {
			setSessionPrice(res.data.player.sessionPrice)
			setSessionNumbers(res.data.player.sessionNumbers)
			setActive(res.data.player.active)
		})
	}, [])

	// useEffect(() => {
	// 	axios.get('http://localhost:8000/api/com').then((response) => {
	// 		setCompsAll(response.data)
	// 		console.log('test', response.data)
	// 		console.log('test2', comp)
	// 	})
	// }, [])

	// useEffect(() => {
	// 	axios.get(`http://localhost:8000/api/stats/${id}`).then((response) => {
	// 		setStatsAll(response.data)
	// 	})
	// }, [])

	console.log('sessionPrice', sessionPrice)
	console.log('sessionNumbers', sessionNumbers)
	console.log('active', active)
	// console.log('active', active)
	// console.log('stats', stats)

	// const dataC = []
	// compsAll.map((item, index) =>
	// 	dataC.push({
	// 		id: item._id,
	// 		name: item.name,
	// 		checked: true,
	// 	})
	// )

	// console.log('hjgh', dataC)

	// const handleCheckboxC = (e) => {
	// 	if (e.target.checked) {
	// 		compState.push(e.target.value)
	// 	} else {
	// 		const index = compState.indexOf(e.target.value)
	// 		if (index > -1) {
	// 			compState ? compState.splice(index, 1) : []
	// 		}
	// 	}
	// }

	// const dataS = []
	// statsAll.map((item, index) =>
	// 	dataS.push({
	// 		id: item._id,
	// 		title: item.title,
	// 		checked: true,
	// 	})
	// )

	// const handleCheckboxS = (e) => {
	// 	if (e.target.checked) {
	// 		statsState.push(e.target.value)
	// 	} else {
	// 		const index = statsState.indexOf(e.target.value)
	// 		if (index > -1) {
	// 			statsState ? statsState.splice(index, 1) : []
	// 		}
	// 	}
	// }
	const handleOnChange = () => {
		setActive(!active)
	}

	return (
		<>
			<form
				onSubmit={updateProfile}
				encType='multipart/form-data'
				className='form'
				id='msform'>
				<fieldset>
					<h2 className='fs-title'>Update Player</h2>

					<input
						type='number'
						value={sessionNumbers}
						onChange={(e) => setSessionNumbers(e.target.value)}
						name='sessionNumbers'
						placeholder='Session Numbers'
					/>
					<input
						type='number'
						value={sessionPrice}
						onChange={(e) => setSessionPrice(e.target.value)}
						name='sessionPrice'
						placeholder='Session Price'
					/>

					<label class='toggle-switch'>
						<br />
						<p>Show competences and statistics ?</p>
						<br />
						<input type='checkbox' checked={active} onChange={handleOnChange} />

						<span class='switch' />
					</label>
					<br />
					{/* <table>
						{' '}
						<tr>
							<td>
								<h3>Choose Competences</h3>
								{dataC.map((item, index) => (
									<div key={index}>
										<input
											value={item.id}
											type='checkbox'
											name='comp'
											checked={dataC.checked}
											onChange={handleCheckboxC}
										/>
										<label htmlFor='scales'>{item.name}</label>
									</div>
								))}
							</td>
							<td>
								<h3>Choose statistiques</h3>
								{dataS.map((item, index) => (
									<div key={index}>
										<input
											value={item.id}
											type='checkbox'
											name='stats'
											checked={dataS.checked}
											onChange={handleCheckboxS}
										/>
										<label htmlFor='scales'>{item.title}</label>
									</div>
								))}
							</td>
						</tr>
					</table> */}

					<button type='submit' className='button' onClick={() => updateProfile()}>
						Update Player
					</button>
				</fieldset>
			</form>

			<br />
		</>
	)
}

export default UpdatePlayer
