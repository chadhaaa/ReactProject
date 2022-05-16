import logo from './logo.svg';
import './App.css';
import Addplace from './pages/crudplace/addComp'
import Getplaces from './pages/crudplace/getComp'
import Updateplace from './pages/crudplace/updateComp'


function App() {
  return (
    <Router>
			<div className='App'>
				<Routes>
					<Route exact path='/addplace' element={<AddPlace />}></Route>

					<Route exact path='/getPlace' element={<GetPlaces />}></Route>

					<Route exact path='/updatePlace/:id' element={<UpdatePlace />}></Route>

					
				</Routes>
			</div>
		</Router>
  );
}

export default App;
