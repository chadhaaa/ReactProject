import React  from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './MainRouter';
import { ToastContainer } from 'react-toastify';
import './App.css';
<<<<<<< .merge_file_nO8ljT

// iheb slimen imports
import SignupCoach from './pages/signup/signup'
import UpdateCoach from './pages/updateCoach/updateCoach'
import GetAlerts from './pages/alert/getAlert';
/*import Addplace from './pages/crudplace/addPlace';
import Getplaces from './pages/crudplace/GetPlaces';
import Updateplace from './pages/crudplace/updatePlace';
*/



import UpdatePlayer from './components/pages/updatePlayer/updatePlayer'
=======
import UpdatePlayer from './pages/updatePlayer/updatePlayer';
>>>>>>> .merge_file_dsVHpT
import Sessions from './pages/allSession/allSession';
import { Routes, Route } from 'react-router-dom';
import AssignChallengePlayer from './components/assignChallengePlayer';
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
<<<<<<< .merge_file_nO8ljT

import GetSeance from './components/pages/sessionDetails/getAllSessions'
import GetOneSeance from './components/pages/sessionDetails/getOneSession'
import GetProfile from './components/pages/profilePlayer/getProfile'
import UpdateProfile from './components/pages/profilePlayer/updateProfile'
import EmailSend from './Components/pages/EmailSend'


function App(){
=======
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



function Appprojet(){
>>>>>>> .merge_file_dsVHpT
	return (
			<div className='App'>
				<Routes>
				{ /*  START  ROUTES */}
					<Route exact path='/addCompetence' element={<AddCompetence />}></Route>

					<Route exact path='/competence' element={<GetCompetences />}></Route>

					<Route exact path='/updateCompetence/:id' element={<UpdateCompetence />}></Route>

					<Route exact path='/compDetails/:id' element={<GetOneCompetence />}></Route>

					<Route exact path='/addStat' element={<AddStatistic />}></Route>

					<Route exact path='/getStat' element={<GetStatistics />}></Route>

					<Route exact path='/updateStat/:id' element={<UpdateStat />}></Route>

<<<<<<< .merge_file_nO8ljT
=======
					<Route exact path='/updateCoach/:id' element={<UpdateCoach />}></Route>
					{ /*  END CHEDHA ROUTES */}
					<Route exact path='/sessionCancel/:id' element={<SessionCancel />}></Route>
>>>>>>> .merge_file_dsVHpT


					<Route exact path='/statDetails/:id' element={<GetOneStatistic />}></Route>


					<Route path="/assignChallengePlayer" element={<AssignChallengePlayer />}></Route>

					<Route exact path='/addEvent' element={<AddEvent />}></Route>

					<Route exact path='/getEvent' element={<GetEvent />}></Route>

					<Route exact path='/updateEvent/:id' element={<UpdateEvent />}></Route>

					<Route path="/signup" element={<SignupCoach />}></Route>

					<Route path="/allSession" element={<Sessions />}></Route>

  					<Route exact path='/updatePlayerCoach/:id' element={<UpdatePlayer />}></Route>

				  	<Route exact path='/sessionList' element={<GetSeance />}></Route>
					
					<Route exact path='/oneSession/:id' element={<GetOneSeance />}></Route>
					<Route exact path='/Profile/:id' element={<GetProfile />}></Route>
					<Route exact path='/CoachViewPlayer/:id' element={<CoachViewPlayer />}></Route>

					<Route exact path='/updateProfile/:id' element={<UpdateProfile />}></Route>

					<Route exact path='/invitePlayer' element={<EmailSend />}></Route>

<<<<<<< .merge_file_nO8ljT
          			



					{/* Iheb Slimen routes					//  */}
					<Route exact path='/signup' element={<SignupCoach />}></Route>
					<Route exact path='/updateCoach/:id' element={<UpdateCoach />}></Route>
					<Route exact path='/alert' element={<GetAlerts />}></Route>
{/*
           			<Route exact path='/addplace' element={<AddPlace />}></Route>
					<Route exact path='/getPlace' element={<GetPlaces />}></Route>
  					<Route exact path='/updatePlace/:id' element={<UpdatePlace />}></Route> 
					*/}

=======
            <Route exact path='/login' element={<Login />}></Route>
					<Route exact path='/firstLogin/:id' element={<FirstLogin />}></Route>
          			<Route path="/challengeList" element={<GetChallenges />}></Route>
            		<Route path="/places" element={<GetPlaces />}></Route>
					<Route path="/updatePlace/:id" element={<UpdatePlace />}></Route>
					<Route path="/place/:id" element={<GetOnePlace />}></Route>
					<Route path="/addPlace/" element={<AddPlace />}></Route>


>>>>>>> .merge_file_dsVHpT
				</Routes>
			</div>
	);
}

function App() {
	return (
		<BrowserRouter>
            <ToastContainer />
				<MainRouter />
		</BrowserRouter>
	);
}

export default App;
