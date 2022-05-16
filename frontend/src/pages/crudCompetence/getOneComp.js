import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'

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
					<li>Visibility : {String(oneComp.visibility)}</li>
					<br />
					<li>
						{' '}
						Stars:{' '}
						<ReactStars
							className='starRatings'
							count={5}
							value={oneComp.stars}
							edit={false}
							size={30}
							color2={'#ffd700'}
						/>
					</li>
					<br />
				</ul>
				<button onClick={() => history('/competence')}> BACK </button>
			</div>
		</section>
	)
}
export default GetOneCompetence
