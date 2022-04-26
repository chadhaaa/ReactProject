import React,{useEffect,useState}  from 'react';
import Program from './containers/program'; 
import ProgramCreate from './containers/Program/Program.create';
import { Route , Routes ,useNavigate, useLocation, Link} from 'react-router-dom';
import Pricing from './containers/pricing';
import Checkout from './containers/checkout';
import Session from './containers/session';
import SessionView from './containers/Sessions/Session.View';
export function MainRouter(){
    const navigate = useNavigate(); 
    const location = useLocation();
    const [locationString,setLocationString] = useState(location.pathname);
    useEffect(()=>{
        // navigate to program when path is / 
        setLocationString(location.pathname.split('/').filter(e=>e!=='').join(' > '));
        if (location.pathname == '/')
		    navigate('/program');
	},[location]);
   
   
    return (
        <div className='w-full flex flex-col'>        
        <nav className='mb-10'>
            <ul className='flex w-[400px] justify-around '>
                <li><Link to="/program" className='!text-[blue] !hover:text-gray-600'>Programs</Link></li>
                <li><Link to="/program/create" className='!text-[blue] !hover:text-gray-600'>Create Program</Link></li>
                <li><Link to="/pricing" className='!text-[blue] !hover:text-gray-600'>Pricing</Link></li>
            </ul>
        </nav>
        <h1 className="text-3x to-black">{locationString}</h1>

        <Routes>
            <Route exact path="session" element={<Session />} />
            <Route exact path="session/:sessionId" element={<SessionView />} />

            <Route exact path="pricing" element={<Pricing />} />
            <Route exact path="program/" element={<Program />} />
            <Route exact path="program/:programId" element={<Program />} />
            <Route exact path="program/edit/:programId" element={<ProgramCreate mode="edit" />} />
            <Route exact path="program/create" element={<ProgramCreate />} />
            <Route path="checkout/:plan" element={<Checkout />} />
        </Routes>
        </div>

    );

} 