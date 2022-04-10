import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
import allSession from './components/pages/allSession/allSession';




function App() {
  
return (
  
  <Router>

    <div className="App">
     
     <Routes>

      <Route exact path='/allSession' element={<allSession />}></Route>    
      
      </Routes>
    
    </div>
  
  </Router> 
     
  );
}

export default App;
