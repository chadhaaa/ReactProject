import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './profile.css'

export default function Profile({
	firstname,
	lastname,
	weight,
	height,
	goal,
	picture,
	email,
	tel,
	id,
}) {
	const history = useNavigate()

	return (
		<tr>
			<th>
				<h1> My Profile </h1>
				<img src={`//localhost:8000/${picture}`} alt='' width='500' height='300' />
				<button type='text' class='submit' onClick={() => history(`/updateProfile/${id}`)}>
					Edit Profile
				</button>
			</th>

			<td>
				<table>
					<tbody>
						<tr>
							<td>
								<strong> First Name </strong>
							</td>
							<td> {firstname}</td>
						</tr>
						<tr>
							<td>
								<strong> Last Name </strong>
							</td>
							<td> {lastname}</td>
						</tr>

						<tr>
							<td>
								<strong> Email </strong>
							</td>
							<td> {email}</td>
						</tr>

						<tr>
							<td>
								<strong> Weight </strong>
							</td>
							<td> {weight}</td>
						</tr>

						<tr>
							<td>
								<strong> Height </strong>
							</td>
							<td> {height}</td>
						</tr>

						<tr>
							<td>
								<strong> Goal </strong>
							</td>
							<td> {goal}</td>
						</tr>

						<tr>
							<td>
								<strong> Telephone Number </strong>
							</td>
							<td> {tel}</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	)
}
