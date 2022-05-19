import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SessionFeedback = () => {
	const history = useNavigate()
	const { id } = useParams()

	// DATA TO UPDATE FOR PLAYER BY COACH
	const [feedback, setFeedback] = useState()

	const giveFeedback = (event) => {
		// event.preventDefault()

		const formdata = {
            feedback: feedback,
        }

		axios.put(`http://localhost:8000/api/sessionFeedback/${id}`, formdata)
        
        history('/sessionList')

	}


	return (
		<div class='form' encType='multipart/form-data'>
			<div class='title'>Update Coach Infos</div>
			<div class='input-container ic1'>
				<div class='input-container ic2'>
					<input
						id='feedback'
						class='input'
						type='text'
						placeholder=' '
						value={feedback}
						onChange={(e) => setFeedback(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter feedback' class='placeholder'>
                        Enter feedback
					</label>
				</div>
				
				<button type='text' class='submit' onClick={() => giveFeedback()}>
					Send
				</button>
			</div>

			<br />
		</div>
	)
}

export default SessionFeedback