import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/Signup';
import Unauthorized from './hooks/Unauthorized';
import Home from './components/Home';
import RequireAuth from './hooks/RequireAuth';
import Seller from './dashboard/admin';
import SuperAdmin from './dashboard/superadmin/index';

const ROLES = {
  'SuperAdmin': 1,
  'Admin': 2,
  'User': 3,
}

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} /> 
        
        <Route element={<RequireAuth allowedRoles={ROLES.Admin} />}>
          <Route path='admin' element={<Seller />} />

        </Route>

        <Route element={<RequireAuth allowedRoles={ROLES.SuperAdmin} />}>
          <Route path='super-admin' element={<SuperAdmin />} />

        </Route>


        <Route path='/*' element={<Unauthorized />}></Route>
      </Routes>
    
    </>
  );
}

export default App;
