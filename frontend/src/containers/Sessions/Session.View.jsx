import React , {useEffect, useState }from 'react';
import {useLocation, useParams} from 'react-router-dom';
import { getSessionsById } from '../../services/session';

export default function SessionView (){
    const params = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [session,setSession] = useState({});
    const { sessionId } = params;
    console.log(sessionId);
    useEffect(async ()=>{
        if(isLoading){
            const res = await getSessionsById(sessionId);
            const sessData = await res.data; 
            console.log(sessData[0]);
            setSession(sessData[0]);
            setIsLoading(false);
        }
    },[]);
    const toUl = (obj)=>{
        return Object.keys(obj).filter(key=>key!='_id').map(key=><li key={key}>{key} : {obj[key]}</li>);
    };

    return (
        <div className='flex w-full'>
            <h2>session id {sessionId}</h2>
            {isLoading && <h1>loading ...</h1>}
            <div className='flex flex-col'>

            
            {  Object.keys(session).length !== 0 &&
                Object.keys(session).map((key,index)=>{
                    return <p className='text-xl' key={index}><span className='text-black font-bold'>{key}</span> : {typeof(session[key])=='object'?<ul className=''>{toUl(session[key][0])}</ul>:session[key]}</p>;
                })
            }
            </div>
            

        </div>
    );

} 