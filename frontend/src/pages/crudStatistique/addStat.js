import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import './addAndUpdate.css'

const AddStatistic = () => {
	const history = useNavigate()

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [link, setLink] = useState('')
	const [unit, setUnit] = useState([])
	const [currentState, setCurrentState] = useState('')
	const [type, setType] = useState([])
	const [minMax, setMinMax] = useState([])
	const [statAlert, setStatAlert] = useState(false)
	const [visibility, setVisibility] = useState(false)

	const options = [
		{ value: 'Compteur', label: 'Compteur' },
		{ value: 'Timer', label: 'Timer' },
		{ value: '+/-', label: '+/-' },
	]

	const optionsUnit = [
		{ value: 'fois', label: 'fois' },
		{ value: 's', label: 's' },
		{ value: 'min', label: 'min' },
		{ value: 'km', label: 'km' },
		{ value: 'm', label: 'm' },
		{ value: 'h', label: 'h' },
		{ value: 'kg', label: 'kg' },
	]

	const optionsMinMax = [
		{ value: 'Minimiser', label: 'Minimiser' },
		{ value: 'Maximiser', label: 'Maximiser' },
	]

	const changeVisibility = () => {
		setVisibility(!visibility)
	}

	const changeStatAlertState = () => {
		setStatAlert(!statAlert)
	}

	const chooseStatType = (value) => {
		setType(value)
	}

	const chooseStatUnit = (valueUnit) => {
		setUnit(valueUnit)
	}

	const chooseStatMinMax = (valueMinMax) => {
		setMinMax(valueMinMax)
	}

	const addStat = (event) => {
		const formdata = {
			title: title,
			description: description,
			link: link,
			visibility: visibility,
			unit: unit,
			currentState: currentState,
			type: type,
			minMax: minMax,
			statAlert: statAlert,
		}
		axios.post('http://localhost:8000/api/statistic', formdata)

		history('/getStat')
	}

	useEffect(() => {
		axios.get('http://localhost:8000/api/statistic').then((res) => {
			setTitle(res.data.statistics.title)
			setDescription(res.data.statistics.description)
			setLink(res.data.statistics.link)
			setVisibility(res.data.statistics.visibility)
			setUnit(res.data.statistics.unit)
			setCurrentState(res.data.statistics.currentState)
			setType(res.data.statistics.type)
			setMinMax(res.data.statistics.minMax)
			setStatAlert(res.data.statistics.statAlert)
		})
	}, [])

	return (
		<div className="crudstat">
		<div class='form'>
			<div class='title'>Add Statistic</div>
			<div class='input-container ic1'>
				<input
					id='title'
					class='input'
					type='text'
					placeholder=' '
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='title' class='placeholder'>
					Title
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='description'
					class='input'
					type='text'
					placeholder=' '
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='description' class='placeholder'>
					Description
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='link'
					class='input'
					type='text'
					placeholder=' '
					value={link}
					onChange={(e) => setLink(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='link' class='placeholder'>
					Link
				</label>
			</div>

			<div class='input-container ic2'>
				<input
					id='currentState'
					class='input'
					type='text'
					placeholder=' '
					value={currentState}
					onChange={(e) => setCurrentState(e.target.value)}
				/>
				<div class='cut'></div>
				<label for='currentState' class='placeholder'>
					Current State
				</label>
			</div>

			<h4>Select Type : </h4>
			<Select options={options} value={type} onChange={chooseStatType} />
			<h4>Select A Unit : </h4>
			<Select options={optionsUnit} value={unit} onChange={chooseStatUnit} />
			<h4>Do you want to Maximize or Minimize this Statistic ? </h4>
			<Select options={optionsMinMax} value={minMax} onChange={chooseStatMinMax} />
			<h4>Do you want to set this Statistic to Visible to Player ? </h4>
			<label class='toggle-switch'>
				<input type='checkbox' checked={visibility} onChange={changeVisibility} />
				<span class='switch' />
			</label>
			<br />
			<h4>Do you want this Statistic to be accompagned with an Alert ? </h4>
			<label class='toggle-switch'>
				<input type='checkbox' checked={statAlert} onChange={changeStatAlertState} />
				<span class='switch' />
			</label>
			<br />
			<button type='text' class='submit' onClick={addStat}>
				Add Statistic
			</button>
			<button type='text' class='submit' onClick={() => history('/getStat')}>
				BACK
			</button>
		</div>
		</div>
	)
}

export default AddStatistic
