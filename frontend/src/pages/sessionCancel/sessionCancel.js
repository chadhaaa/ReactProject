import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SessionCancel = () => {
	const history = useNavigate()
	const { id } = useParams()

	// DATA TO UPDATE FOR PLAYER BY COACH
	const [reason, setReason] = useState()

	const cancelSession = (event) => {
		// event.preventDefault()

		const formdata = {

			cancellation: true,
            reason: reason,
 }

		axios.put(`http://localhost:8000/api/sessionCancel/${id}`, formdata)
        
        history('/sessionList')

	}


	return (
		<div class='form' encType='multipart/form-data'>
			<div class='title'>Update Coach Infos</div>
			<div class='input-container ic1'>
				<div class='input-container ic2'>
					<input
						id='reason'
						class='input'
						type='text'
						placeholder=' '
						value={reason}
						onChange={(e) => setReason(e.target.value)}
					/>
					<div class='cut'></div>
					<label for='Enter cancellation reason' class='placeholder'>
                        Enter cancellation reason
					</label>
				</div>
				
				<button type='text' class='submit' onClick={() => cancelSession()}>
					Cancel Session
				</button>
			</div>

			<br />
		</div>
	)
}

export default SessionCancel