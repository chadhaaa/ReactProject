//import logo from './logo.svg';
//import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import ChallengeList from './components/challengeList';



function App() {
  return (
	<div className="App">
		<ChallengeList />
		{/* <BrowserRouter>
			<Routes>
			<Route path="/ChallengeList"> element={<ChallengeList />}
			</Route>
			</Routes>
		</BrowserRouter> */}
		
	</div>
	
  );
}

export default App;
