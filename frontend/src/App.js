import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AddCompetence from './components/pages/crudCompetence/addComp'
import GetCompetences from './components/pages/crudCompetence/getComp'
import UpdateCompetence from './components/pages/crudCompetence/updateComp'
import AddStatistic from './components/pages/crudStatistique/addStat'
import GetStatistics from './components/pages/crudStatistique/getStat'
import UpdateStat from './components/pages/crudStatistique/updateStat'
import GetOneCompetence from './components/pages/crudCompetence/getOneComp'
import GetOneStatistic from './components/pages/crudStatistique/getOneStat'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route exact path='/addCompetence' element={<AddCompetence />}></Route>

					<Route exact path='/getCompetence' element={<GetCompetences />}></Route>

					<Route exact path='/updateCompetence/:id' element={<UpdateCompetence />}></Route>

					<Route exact path='/compDetails/:id' element={<GetOneCompetence />}></Route>

					<Route exact path='/addStat' element={<AddStatistic />}></Route>

					<Route exact path='/getStat' element={<GetStatistics />}></Route>

					<Route exact path='/updateStat/:id' element={<UpdateStat />}></Route>

					<Route exact path='/statDetails/:id' element={<GetOneStatistic />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
