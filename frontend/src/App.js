import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
import GetProfile from './components/pages/profilePlayer/getProfile'
import UpdateProfile from './components/pages/profilePlayer/updateProfile'
function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route exact path='/Profile/:id' element={<GetProfile />}></Route>

					<Route exact path='/updateProfile/:id' element={<UpdateProfile />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
