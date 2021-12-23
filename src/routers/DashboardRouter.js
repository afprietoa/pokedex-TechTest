import React from 'react'
import {
  Routes,
  Route,
  Navigate
}
  from 'react-router-dom';

import Details from '../containers/Details';
import Home from '../containers/Home';





export const DashboardRouter = () => {
  return (

    <>

    
    

      <Routes>

        <Route exact path="/*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:url" element={<Details />} />

      </Routes>

    </>

  );
}


