import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'

import EmailSend from './components/pages/SendEmailPlayer'
function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route exact path='/players' element={<EmailSend />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
