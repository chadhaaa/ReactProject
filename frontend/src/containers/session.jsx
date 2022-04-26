import React ,{useEffect,useState}from 'react';
import { Link, useParams, useRoutes } from 'react-router-dom';
import { getSessionsByPlayerId } from '../services/session';
import { getSessions } from '../services/session';
import SessionList from './Sessions/Session.List.jsx';
export default function Session(){
    const [sessions,setSessions] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect( async ()=>{
        if (isLoading){
            const { data } = await getSessionsByPlayerId('5e9f9b9f9b9f9b9f9b9f9e31');
            setSessions(data);
            setIsLoading(false);
        }
    },[isLoading]);

    return (        
    <div className='flex-col'>
        {isLoading &&<h1>loading ...</h1>}
        {!isLoading && <SessionList setIsLoading={setIsLoading} sessions={sessions}/> }
    </div>);


}