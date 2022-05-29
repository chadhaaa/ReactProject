import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './allEvents.css'

export default function OneEvent({
	titre,
	description,
	dateDebut,
    dateFin,
    hour,
	place,
	visibility,
	idCoach,
	id,
}) {
	return (
		<tr>
			<th>
				<strong>Event Details</strong>
			</th>
			<td>
				<table>
					<tr>
						<td>
							<strong> Titre :</strong>
						</td>
						<td> {titre} </td>
					</tr>
					<tr>
						<td>
							<strong>Description : </strong>
						</td>
						<td> {description} </td>
					</tr>
					<tr>
						<td>
							<strong>date Debut :</strong>
						</td>
						<td> {dateDebut} </td>
					</tr>
                    <tr>
						<td>
							<strong>date fin :</strong>
						</td>
						<td> {dateFin} </td>
					</tr>
					<tr>
						<td>
							<strong>Heur :</strong>
						</td>
						<td> {hour} </td>
					</tr>
					<tr>
						<td>
							<strong>Emplacement :</strong>
						</td>
						<td> {place} </td>
					</tr>
				</table>
			</td>
		</tr>
	)
}