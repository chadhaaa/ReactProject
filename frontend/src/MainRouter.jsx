import React,{useContext, useEffect,useState}  from 'react';
import Program from './containers/program'; 
import ProgramCreate from './containers/Program/Program.create';
import {  Routes ,useNavigate, useLocation, Link,Route } from 'react-router-dom';
import Pricing from './containers/pricing';
import Checkout from './containers/checkout';
import Session from './containers/session';
import SessionView from './containers/Sessions/Session.View';
import Invitation from './containers/invitation';


//routes from app
import UpdatePlayer from './pages/updatePlayer/updatePlayer';
import Sessions from './pages/allSession/allSession';
import AssignChallengePlayer from './Components/assignChallengePlayer';
import AddEvent from './pages/CRUD_defi/addEvent';
import GetEvent from './pages/CRUD_defi/getEvent';
import UpdateEvent from './pages/CRUD_defi/updateEvent';
import AddCompetence from './pages/crudCompetence/addComp';
import GetCompetences from './pages/crudCompetence/getComp';
import UpdateCompetence from './pages/crudCompetence/updateComp';
import AddStatistic from './pages/crudStatistique/addStat';
import GetStatistics from './pages/crudStatistique/getStat';
import UpdateStat from './pages/crudStatistique/updateStat';
import GetOneCompetence from './pages/crudCompetence/getOneComp';
import GetOneStatistic from './pages/crudStatistique/getOneStat';
import GetAlerts from './pages/alert/getAlert';
import UpdateCoach from './pages/updateCoach/updateCoach';
import SessionCancel from './pages/sessionCancel/sessionCancel';
import SignupCoach from './pages/signup/signup';
import Login from './pages/login/login';
import FirstLogin from './pages/firstLogin/firstLogin';
import GetSeance from './pages/sessionDetails/getAllSessions';
import GetOneSeance from './pages/sessionDetails/getOneSession';
import GetProfile from './pages/profilePlayer/getProfile';
import UpdateProfile from './pages/profilePlayer/updateProfile';
import EmailSend from './pages/emailSend/EmailSend';
import GetChallenges from './pages/challengeDone/challengeDone';
import GetPlaces from './pages/crudPlace/getPlaces';
import UpdatePlace from './pages/crudPlace/updatePlace';
import GetOnePlace from './pages/crudPlace/getOnePlace';
import AddPlace from './pages/crudPlace/addPlace';
import CoachViewPlayer from './pages/CoachViewPlayer/CoachViewPlayer';

import { rootContext } from './contexts/rootContext';


export function MainRouter(){
    const navigate = useNavigate(); 
    const location = useLocation();
    const [locationString,setLocationString] = useState(location.pathname);
    useEffect(()=>{
        // navigate to program when path is / 
        setLocationString(location.pathname.split('/').filter(e=>e!=='').join(' > '));
      
	},[]);
  
    return (
       <div className='w-[94vw] flex flex-col mx-[2vw]'>     
        
            <nav className='mb-10'>
                <ul className='flex w-[400px] justify-around '>
                    <li><Link to="/program" className='!text-[blue] !hover:text-gray-600'>Programs</Link></li>
                    <li><Link to="/program/create" className='!text-[blue] !hover:text-gray-600'>Create Program</Link></li>
                    <li><Link to="/pricing" className='!text-[blue] !hover:text-gray-600'>Pricing</Link></li>
                    <li onClick={()=>{
                        localStorage.removeItem("user");
                        navigate("/login");
                    }}><span className='!text-[red] !hover:text-red-600'>Logout</span></li>
                </ul>
            </nav>
             
            <h1 className="text-3xl font-bold mb-10 to-black">{locationString}</h1>
            <Routes>
                <Route exact path="session" element={<Session />} />
                <Route exact path="invitation/:invitationToken" element={<Invitation />} />
                <Route exact path="session/:sessionId" element={<SessionView />} />
                <Route exact path="pricing" element={<Pricing />} />
                <Route exact path="program/" element={<Program />} />
                <Route exact path="program/:programId" element={<Program />} />
                <Route exact path="program/edit/:programId" element={<ProgramCreate mode="edit" />} />
                <Route exact path="program/create" element={<ProgramCreate />} />
                <Route path="checkout/:plan" element={<Checkout />} />
                <Route exact path='/addCompetence' element={<AddCompetence />}/>

					<Route exact path='/competence' element={<GetCompetences />}/>

					<Route exact path='/updateCompetence/:id' element={<UpdateCompetence />}/>

					<Route exact path='/compDetails/:id' element={<GetOneCompetence />}/>

					<Route exact path='/addStat' element={<AddStatistic />}/>

					<Route exact path='/getStat' element={<GetStatistics />}/>

					<Route exact path='/updateStat/:id' element={<UpdateStat />}/>

					<Route exact path='/updateCoach/:id' element={<UpdateCoach />}/>
					{ /*  END CHEDHA ROUTES */}
					<Route exact path='/sessionCancel/:id' element={<SessionCancel />}/>

					<Route exact path='/signup' element={<SignupCoach />}/>

					<Route exact path='/statDetails/:id' element={<GetOneStatistic />}/>

					<Route exact path='/alert' element={<GetAlerts />}/>

					<Route path="/assignChallengePlayer" element={<AssignChallengePlayer />}/>

					<Route exact path='/addEvent' element={<AddEvent />}/>

					<Route exact path='/getEvent' element={<GetEvent />}/>

					<Route exact path='/updateEvent/:id' element={<UpdateEvent />}/>

					<Route path="/signup" element={<SignupCoach />}/>

					<Route path="/allSession" element={<Sessions />}/>

  					<Route exact path='/updatePlayerCoach/:id' element={<UpdatePlayer />}/>

				  	<Route exact path='/sessionList' element={<GetSeance />}/>
					
					<Route exact path='/oneSession/:id' element={<GetOneSeance />}/>
					<Route exact path='/Profile/:id' element={<GetProfile />}/>
					<Route exact path='/CoachViewPlayer/:id' element={<CoachViewPlayer />}/>

					<Route exact path='/updateProfile/:id' element={<UpdateProfile />}/>

					<Route exact path='/invitePlayer' element={<EmailSend />}/>

                    <Route exact path='/login' element={<Login />}/>
					<Route exact path='/firstLogin/:id' element={<FirstLogin />}/>
          			<Route path="/challengeList" element={<GetChallenges />}/>
            		<Route path="/places" element={<GetPlaces />}></Route>
					<Route path="/updatePlace/:id" element={<UpdatePlace />}/>
					<Route path="/place/:id" element={<GetOnePlace />}/>
					<Route path="/addPlace/" element={<AddPlace />}/>

            </Routes>
        </div>
    );

} 