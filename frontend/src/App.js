import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
import GetSeance from './components/pages/sessionDetails/getAllSession'
import GetOneSeance from './components/pages/sessionDetails/getOneSession'
function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route exact path='/sessionList' element={<GetSeance />}></Route>
					<Route exact path='/oneSession/:id' element={<GetOneSeance />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
