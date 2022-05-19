
import { Routes, Route } from 'react-router-dom';


import SessionFeedback from './pages/sessionFeedback/sessionFeedback';


function App(){
	return (
			<div className='App'>
				<Routes>

					<Route exact path='/sessionFeedback/:id' element={<SessionFeedback />}></Route>
				</Routes>
			</div>
	);

}

export default App
