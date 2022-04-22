import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import EmailSend from './Components/pages/EmailSend'
function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					{/* <Route exact path='/players' element={<EmailSend />}></Route> */}
					<Route exact path='/invitePlayer' element={<EmailSend />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
