
import './App.css';
import UpdatePlayer from './components/pages/updatePlayer/updatePlayer'
import Sessions from './pages/allSession/allSession';
import { Routes, Route } from 'react-router-dom';
import AssignChallengePlayer from './components/assignChallengePlayer';
import AddEvent from './pages/pages/CRUD_defi/addEvent';
import GetEvent from './pages/pages/CRUD_defi/getEvent';
import UpdateEvent from './pages/pages/CRUD_defi/updateEvent';
import AddCompetence from './pages/crudCompetence/addComp';
import GetCompetences from './pages/crudCompetence/getComp';
import UpdateCompetence from './pages/crudCompetence/updateComp';
import AddStatistic from './pages/crudStatistique/addStat';
import GetStatistics from './pages/crudStatistique/getStat';
import UpdateStat from './pages/crudStatistique/updateStat';
import GetOneCompetence from './pages/crudCompetence/getOneComp';
import GetOneStatistic from './pages/crudStatistique/getOneStat';
import GetAlerts from './pages/alert/getAlert';
import UpdateCoach from './pages/updateCoach/updateCoach'
import SessionCancel from './pages/sessionCancel/sessionCancel'
import SignupCoach from './pages/signup/signup'

import GetSeance from './components/pages/sessionDetails/getAllSessions'
import GetOneSeance from './components/pages/sessionDetails/getOneSession'
import GetProfile from './components/pages/profilePlayer/getProfile'
import UpdateProfile from './components/pages/profilePlayer/updateProfile'
import EmailSend from './Components/pages/EmailSend'
import GetChallenges from './pages/challengeDone/challengeDone';




function App(){
	return (
			<div className='App'>
				<Routes>

					<Route exact path='/addCompetence' element={<AddCompetence />}></Route>

					<Route exact path='/competence' element={<GetCompetences />}></Route>

					<Route exact path='/updateCompetence/:id' element={<UpdateCompetence />}></Route>

					<Route exact path='/compDetails/:id' element={<GetOneCompetence />}></Route>

					<Route exact path='/addStat' element={<AddStatistic />}></Route>

					<Route exact path='/getStat' element={<GetStatistics />}></Route>

					<Route exact path='/updateStat/:id' element={<UpdateStat />}></Route>

					<Route exact path='/updateCoach/:id' element={<UpdateCoach />}></Route>

					<Route exact path='/sessionCancel/:id' element={<SessionCancel />}></Route>

					<Route exact path='/signup' element={<SignupCoach />}></Route>

					<Route exact path='/statDetails/:id' element={<GetOneStatistic />}></Route>

					<Route exact path='/alert' element={<GetAlerts />}></Route>

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

					<Route exact path='/updateProfile/:id' element={<UpdateProfile />}></Route>

					<Route exact path='/invitePlayer' element={<EmailSend />}></Route>
          <Route path="/challengeList" element={<GetChallenges />}>
            <Route path="/places" element={<GetPlaces />}></Route>
        <Route path="/updatePlace/:id" element={<UpdatePlace />}></Route>
        <Route path="/place/:id" element={<GetOnePlace />}></Route>
        <Route path="/addPlace/" element={<AddPlace />}></Route>

				</Routes>
			</div>
	);

}

export default App
