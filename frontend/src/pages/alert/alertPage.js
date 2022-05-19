import './alertPage.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Alert({ name, description, id , idCoach, type }) {

	return (
        <p class={type}>{name} : {description} : {type}</p>
	)
}
