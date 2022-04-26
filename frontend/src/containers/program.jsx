import React ,{useEffect,useState}from 'react';
import { Link, useParams, useRoutes } from 'react-router-dom';
import { getPrograms } from '../services/program';
import ProgramList from './Program/Program.List.jsx';
export default function Program(){
    const [programs,setPrograms] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect( async ()=>{
        if (isLoading){
            const { data } = await getPrograms();
            setPrograms(data);
            setIsLoading(false);
        }
    },[isLoading]);

    return (        
    <div>
        <h1 className="text-3xl to-black">Programs</h1>
        {isLoading &&<h1>loading ...</h1>}
        {!isLoading && <ProgramList setIsLoading={setIsLoading} programs={programs}/> }
        <button className='px-5 py-2 bg-gray-200 hover:bg-gray-400 text-blue-400 border-2' >
            <Link to="/program/create"> Add program</Link></button>
    </div>);


}