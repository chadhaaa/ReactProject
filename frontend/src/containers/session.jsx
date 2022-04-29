import React, { useEffect, useState } from 'react';
import { getSessionsByPlayerId } from '../services/session';
import SessionList from './Sessions/Session.List.jsx';
export default function Session() {
	const [sessions, setSessions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [initalDate, setInitialDate] = useState(new Date().toISOString().split('T')[0]);
	const [finalDate, setFinalDate] = useState('');
	useEffect(async () => {
		loadSessionData();
		setInitialDate();
	}, [isLoading]);

	const loadSessionData = async () => {
		if (isLoading) {
			const { data } = await getSessionsByPlayerId('5e9f9b9f9b9f9b9f9b9f9e31');
			console.log(data);
			const filtredSessions =
				initalDate === '' ? data : data.filter(filterDateFunction);
			setSessions(filtredSessions);
			setIsLoading(false);
		}
	};
    const filterDateFunction = (session)=>{
        let date = new Date(session.day);
        if (new Date(initalDate).getTime()<=date.getTime() && new Date (finalDate).getTime()>=date.getTime()){
            return true;
        }
    }; 

	return (
		<div className='w-full'>
			<div className='flex justify-between'>
				<div className='flex justift-around gap-4'>
					<button className='bg-[orange] text-blue-700'
                            onClick={() => {setIsLoading(true); setInitialDate(new Date().toISOString().split('T')[0]);setFinalDate('');}}>Today's Sessions</button>
					<button  onClick={()=>{setIsLoading(true); setInitialDate('');setFinalDate('');}}>Show All</button>
				</div>
				<div className='flex gap-4 '>
					<div className='w-40'>
						<label htmlFor='startDate'>start date</label>
						<input
							type='date'
							id='startDate'
							className='w-40'
							value={initalDate}
							onChange={(e) => {
                                setInitialDate(e.target.value);
                                setIsLoading(true);
								
							}}
						/>
					</div>
					<div className='w-40'>
						<label htmlFor='finalDate'>end date</label>
						<input
							type='date'
							id='finalDate'
							value={finalDate}
							onChange={(e) => {
                                setFinalDate(e.target.value);
                                setIsLoading(true);
							}}
						/>
					</div>
				</div>
			</div>
			{isLoading && <h1>loading ...</h1>}
			{!isLoading && <SessionList setIsLoading={setIsLoading} sessions={sessions} />}
		</div>
	);
}
