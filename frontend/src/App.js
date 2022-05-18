//import logo from './logo.svg';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import GetChallenges from './pages/challengeDone/challengeDone';



function App() {
  return (
	<BrowserRouter>
      <Routes>
        <Route path="/challengeList" element={<GetChallenges />}>
        </Route>
      </Routes>
    </BrowserRouter>
	
  );
}

export default App;
