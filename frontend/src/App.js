//import logo from './logo.svg';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import ChallengeList from './components/challengeList';



function App() {
  return (
	<BrowserRouter>
      <Routes>
        <Route path="/challengeList" element={<ChallengeList />}>
        </Route>
      </Routes>
    </BrowserRouter>
	
  );
}

export default App;
