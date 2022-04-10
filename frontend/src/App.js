import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
import AddEvent from './components/pages/CRUD_defi/addEvent';
import GetEvent from './components/pages/CRUD_defi/getEvent';
import UpdateEvent from './components/pages/CRUD_defi/updateEvent';



function App() {
  
return (
  
  <Router>

    <div className="App">
     
     <Routes>
      <Route exact path='/addEvent' element={<AddEvent />}></Route>

      <Route exact path='/getEvent' element={<GetEvent />}></Route>

      <Route exact path='/updateEvent/:id' element={<UpdateEvent />}></Route>
    
      </Routes>
    
    </div>
  
  </Router> 
     
  );
}

export default App;
