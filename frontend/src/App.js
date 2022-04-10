import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import UpdatePlayer from './components/pages/updatePlayer/updatePlayer'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route exact path='/updatePlayer/:id' element={<UpdatePlayer />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
