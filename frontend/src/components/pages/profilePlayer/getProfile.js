import axios from 'axios'
import { useEffect, useState } from 'react'
import Profile from './profilePage'
import { useParams } from 'react-router-dom'
import './profile.css'

const GetProfile = () => {
	const [profile, setProfile] = useState([])
	const [stat, setStat] = useState([])
	const [Comp, setComp] = useState([])
	const { id } = useParams()

	const getProfile = async () => {
		const response = await axios
			.get(`http://localhost:8000/api/viewProfile/${id}`)
			.then((response) => {
				setProfile(response.data.player)
				setStat(response.data.stats)
				setComp(response.data.comp)
			})
	}
	console.log('stat', stat)
	console.log('comp', Comp)

	useEffect(() => {
		getProfile()
	}, [])

	return (
		<div className='App'>
			<table>
				<Profile
					id={profile._id}
					firstname={profile.firstname}
					lastname={profile.lastname}
					weight={profile.weight}
					email={profile.email}
					height={profile.height}
					picture={profile.picture}
					tel={profile.tel}
					goal={profile.goal}
				/>
				<tr>
					<th>My statistics</th>
					<td>
						{stat.map((item, index) => {
							if (item.statId.visibility) {
								return (
									<table key={index}>
										<tbody>
											<tr>
												<td>
													<strong> Title :</strong>{' '}
												</td>
												<td> {item.statId.title} </td>
											</tr>
											<tr>
												<td>
													{' '}
													<strong>Unit : </strong>
												</td>
												<td> {item.statId.unit} </td>
											</tr>
											<tr>
												<td>
													{' '}
													<strong>Link :</strong>{' '}
												</td>
												<td> {item.statId.link} </td>
											</tr>
											<tr>
												<td>
													{' '}
													<strong>Type :</strong>{' '}
												</td>
												<td> {item.statId.type} </td>
											</tr>
											<tr>
												<td>
													<strong> Description :</strong>{' '}
												</td>
												<td> {item.statId.description} </td>
											</tr>
											<tr>
												<td>
													{' '}
													<strong>Current State:</strong>{' '}
												</td>
												<td> {item.statId.currentState} </td>
											</tr>
										</tbody>
									</table>
								)
							} else {
								return <p>There are no statistics to show !!</p>
							}
						})}
					</td>
				</tr>
				<tr>
					<th>My competences</th>
					<td>
						{Comp.map((item, index) => {
							if (item.compId.visibility) {
								return (
									<table key={index}>
										<tbody>
											<tr>
												<td>
													<strong> Name: </strong>
												</td>
												<td> {item.compId.name} </td>
											</tr>
											<tr>
												<td>
													<strong> Description :</strong>{' '}
												</td>
												<td> {item.compId.description} </td>
											</tr>
											<tr>
												<td>
													<strong> Link : </strong>
												</td>
												<td> {item.compId.link} </td>
											</tr>
										</tbody>
									</table>
								)
							} else {
								return <p>There are no competences to show !!</p>
							}
						})}
					</td>
				</tr>
			</table>
		</div>
	)
}
export default GetProfile
