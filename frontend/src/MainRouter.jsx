import React,{useEffect}  from 'react';
import Program from './containers/program'; 
import ProgramCreate from './containers/Program/Program.create';
import { Route , Routes ,useNavigate} from 'react-router-dom';

export function MainRouter(){
    const navigate = useNavigate(); 
    useEffect(()=>{
		navigate('/program');
	},[]);
    return (
        <Routes>
            <Route exact path="program/" element={<Program />} />
            <Route exact path="program/:programId" element={<Program />} />
            <Route exact path="program/:programId/edit" element={<ProgramCreate mode="edit" />} />
            <Route exact path="program/create" element={<ProgramCreate />} />
        </Routes>
    );

} 