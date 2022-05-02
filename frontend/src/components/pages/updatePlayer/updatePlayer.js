import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePlayer = () => {
	const history = useNavigate()
	const { id } = useParams()
	const [sessionPrice, setSessionPrice] = useState('')
	const [sessionNumbers, setSessionNumbers] = useState('')
	const [active, setActive] = useState(false)
	const [comp, setComp] = useState([])
	const [compState, setCompState] = useState([])
	const [compsAll, setCompsAll] = useState([])
	const [errors, setErrors] = useState({})

	const updateProf = async (event) => {
		const formdata = new FormData()
		formdata.append('sessionPrice', sessionPrice)
		formdata.append('sessionNumbers', sessionNumbers)
		formdata.append('comp', comp)
		formdata.append('active', active)

		axios
			.put(`http://localhost:8000/api/player/${id}`, formdata)
			.then((res) => {
				console.log(res.data)
			})
			.catch((err) => setErrors(err.res))
	}

	useEffect(() => {
		axios.get('http://localhost:8000/api/com').then((response) => {
			setCompsAll(response.data)
			console.log('test', response.data)
			console.log('test2', comp)
		})
	}, [])

	useEffect(() => {
		axios.get(`http://localhost:8000/api/sessionUpdate/${id}`).then((res) => {
			sessionNumbers(res.data.player.sessionNumbers)
			sessionPrice(res.data.player.sessionPrice)
			setComp(res.data.comp)
			setActive(res.data.player.active)
		})
	}, [])
	console.log('dkjhkjhkj', sessionPrice)
	const dataC = []
	compsAll.map((item, index) =>
		dataC.push({
			id: item._id,
			name: item.name,
			checked: true,
		})
	)
	console.log('hjgh', dataC)

	const handleCheckboxC = (e) => {
		if (e.target.checked) {
			compState.push(e.target.value)
		} else {
			const index = compState.indexOf(e.target.value)
			if (index > -1) {
				compState.splice(index, 1)
			}
		}
	}

	const handleOnChange = () => {
		setActive(!active)
	}

	return (
		<>
			<form onSubmit={updateProf} encType='multipart/form-data' className='form' id='msform'>
				<fieldset>
					<h2 className='fs-title'>Update Player</h2>

					<input
						type='text'
						value={sessionNumbers}
						onChange={(e) => setSessionNumbers(e.target.value)}
						name='sessionNumbers'
						required='required'
						placeholder='Session Numbers'
					/>
					<input
						type='text'
						value={sessionPrice}
						onChange={(e) => setSessionPrice(e.target.value)}
						name='sessionPrice'
						required='required'
						placeholder='Session Price'
					/>
					<label>
						<input type='checkbox' checked={active.checked} onChange={handleOnChange} />
						Active ?
					</label>
					<br />
					<table>
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
						</tr>
					</table>

					<button type='submit' className='button'>
						Update Player
					</button>
				</fieldset>
			</form>

			<br />
		</>
	)
}

export default UpdatePlayer
