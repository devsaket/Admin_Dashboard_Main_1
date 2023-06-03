import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='login' element={<Login />} />
        <Route exact path='signup' element={<SignUp />} /> 
      </Routes>
    
    </>
  );
}

export default App;
