import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const GetOneCompetence = () => {
	const [oneComp, setOneComp] = useState([])
	const { id } = useParams()
	const history = useNavigate()

	useEffect(() => {
		getOneComp()
	}, [])

	const getOneComp = async () => {
		const response = await axios.get(`/api/competence/${id}`)
		setOneComp(response.data)
	}
	return (
		<section>
			<div className='App'>
				<h1 key={oneComp._id}>Details of Competence : {oneComp.name} </h1>
				<br />
				<ul className='check-list'>
					<li>Name : {oneComp.name}</li>
					<br />
					<li>Description : {oneComp.description}</li>
					<br />
					<li>Link : {oneComp.link}</li>
					<br />
				</ul>
				<button onClick={() => history('/getCompetence')}> BACK </button>
			</div>
		</section>
	)
}
export default GetOneCompetence
