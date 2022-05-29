import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Competence from './compPage'

const GetCompetences = () => {
	const [comp, setComp] = useState([])
	const history = useNavigate()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (isLoading) {
			getComps()
			setIsLoading(false)
		}
	}, [isLoading])

	const getComps = async () => {
		const response = await axios.get('http://localhost:8000/api/competences')
		setComp(response.data)
	}
	return (
		<div className='App'>
			<h1>Liste des competences </h1>
			<button onClick={() => history('/addCompetence')} data-testid='Add-New'>
				{' '}
				Add New Competence{' '}
			</button>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				comp.map(function (comps) {
					return (
						<Competence
							id={comps._id}
							key={comps._id}
							name={comps.name}
							description={comps.description}
							visibility={String(comps.visibility)}
							link={comps.link}
						/>
					)
				})
			)}
		</div>
	)
}
export default GetCompetences
