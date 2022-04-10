import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/signup';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    return (
      <>
      <Routes>
        <Route path="/signup" element={<Signup />}/>

      </Routes>
      </>
    );


  }
    
}

export default App;
