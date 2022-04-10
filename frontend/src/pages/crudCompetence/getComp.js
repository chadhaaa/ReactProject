import axios from 'axios'
import { useEffect, useState } from 'react'
import Competence from './competencePage'

const GetCompetences = () => {
	const [comp, setComp] = useState([])

	useEffect(() => {
		getComps()
	}, [])

	const getComps = async () => {
		const response = await axios.get('http://localhost:8000/competences')
		setComp(response.data)
	}
	return (
		<div className='App'>
			<h1>Liste des competences </h1>
			{comp.map(function (comps) {
				return (
					<Competence
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
