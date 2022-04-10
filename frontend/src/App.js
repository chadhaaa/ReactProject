//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AssignChallengePlayer from './components/assignChallengePlayer';

function App() {
	return (
	<BrowserRouter>
      <Routes>
        <Route path="/assignChallengePlayer" element={<AssignChallengePlayer />}>
        </Route>
      </Routes>
    </BrowserRouter>
	);
}

export default App;
