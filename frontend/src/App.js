import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
i
import AddCompetence from './components/pages/crudCompetence/addComp'
import GetCompetences from './components/pages/crudCompetence/getComp'
import UpdateCompetence from './components/pages/crudCompetence/updateComp'
import AddStatistic from './pages/crudStatistique/addStat'
import GetStatistics from './pages/crudStatistique/getStat'
import UpdateStatistic from './pages/crudStatistique/updateStat'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route exact path='/addCompetence' element={<AddCompetence />}></Route>

					<Route exact path='/getCompetence' element={<GetCompetences />}></Route>

					<Route exact path='/updateCompetence/:id' element={<UpdateCompetence />}></Route>

					<Route exact path='/addStat' element={<AddStatistic />}></Route>

					<Route exact path='/getStat' element={<GetStatistics />}></Route>

					<Route exact path='/updateStat/:id' element={<UpdateStatistic />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
