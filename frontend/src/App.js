import React  from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './MainRouter';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
	
	return (
		<BrowserRouter>
            <ToastContainer />
			<MainRouter />
		</BrowserRouter>
	);
}

export default App;
