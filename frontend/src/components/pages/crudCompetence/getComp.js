import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Competence from './compPage'

const GetCompetences = () => {
	const [comp, setComp] = useState([])
	const history = useNavigate()

	useEffect(() => {
		getComps()
	}, [])

	const getComps = async () => {
		const response = await axios.get('http://localhost:8000/api/competences')
		setComp(response.data)
	}
	return (
		<div className='App'>
			<h1>Liste des competences </h1>
			<button onClick={() => history('/addCompetence')}> Add New Competence </button>
			{comp.map(function (comps) {
				return (
					<Competence
						id={comps._id}
						key={comps._id}
						name={comps.name}
						description={comps.description}
						visibility={comps.visibility}
						link={comps.link}
					/>
				)
			})}
		</div>
	)
}
export default GetCompetences
