import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
import AddChallenge from './components/pages/CRUD_challenge/addChallenge';
import GetChallenges from './components/pages/CRUD_challenge/getChallenge';
import UpdateChallenge from './components/pages/CRUD_challenge/updateChallenge';



function App() {
  
return (
  
  <Router>

    <div className="App">
     
     <Routes>
      <Route exact path='/addChallenge' element={<AddChallenge />}></Route>

      <Route exact path='/getChallenge' element={<GetChallenges />}></Route>

      <Route exact path='/updateChallenge/:id' element={<UpdateChallenge />}></Route>
    
      </Routes>
    
    </div>
  
  </Router> 
     
  );
}

export default App;
