import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import GetPlaces from './pages/challengeDone/challengeDone';
import UpdatePlace from './pages/challengeDone/updatePlace';
import AddPlace from './pages/challengeDone/addPlace'
import GetOnePlace from './pages/challengeDone/getOnePlace'



function App() {
  return (
	<BrowserRouter>
      <Routes>
        <Route path="/places" element={<GetPlaces />}></Route>
        <Route path="/updatePlace/:id" element={<UpdatePlace />}></Route>
        <Route path="/place/:id" element={<GetOnePlace />}></Route>
        <Route path="/addPlace/" element={<AddPlace />}></Route>
        
      </Routes>
    </BrowserRouter>
	
  );
}

export default App;