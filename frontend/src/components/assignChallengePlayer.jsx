import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {Link } from 'react-router-dom';

const AssignChallengePlayer = () => {
  
	const history = useNavigate();	
	const [idPlayers, addNewPlayer] = useState('');
	const [idChallenge, setID] = useState('');
	const changeId  = (event) => {
		setID(event.target.value );
	};
	const handleChange = (event) => {
		addNewPlayer( event.target.value);
	};
	
	const assignChallengePlayer = async (event) => {
		event.preventDefault();

		await axios.put(`/api/assignChallengePlayer/${idChallenge}`, idPlayers);
		//badel l link hasb eli aandek baad fel code besh temshilou baad update
		history('/');
	};
	return (
		<Link to={'/assignChallengePlayer'}  element={ <AssignChallengePlayer />}> 

		<div>
			<div className='form-div'>
				<form onSubmit={assignChallengePlayer}>
			
			<input
				type='text'
				placeholder='Enter challenge id'
				value={idChallenge}
				onChange={changeId}
				className='form-control form-group'
			/>
	
			<input
				type='text'
				placeholder='Enter player id'
				value={idPlayers}
				onChange={handleChange}
				className='form-control form-group'
			/>



			<input type='submit' className='btn btn-danger btn-block' value='submit'/>
			</form>
			</div>
			
		</div>
		</Link>
		
	);
};

export default AssignChallengePlayer;


/*

	
	*/