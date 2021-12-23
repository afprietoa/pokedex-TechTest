import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, 
  Routes,
  Route} 
  from 'react-router-dom';
  import { getAuth,onAuthStateChanged } from "@firebase/auth";
import {PublicRouter} from './PublicRouter'
import {PrivateRouter} from './PrivateRouter'

import { DashboardRouter } from './DashboardRouter';
import { Login } from "../containers/Login";
import { SignUp } from "../containers/SignUp";


export const AppRouter = () => {
  
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)



useEffect(() => {
     const auth = getAuth();
     onAuthStateChanged(auth, (user) => {
         if(user?.uid){
          //console.log(user)
           
          setIsLoggedIn(true)
         }
         else{
          setIsLoggedIn(false)
         }

         setChecking(false)
     })

  
}, [setChecking, setIsLoggedIn])


  if(checking){
      return(
          <h1>Espere...</h1>
      )
  }
  return (
        
    <Router>



        <Routes>



        <Route path="/login" element={
                    <PublicRouter isAuthenticated={isLoggedIn}>
                        <Login/> 
                    </PublicRouter>
                } />



                <Route path="/signup" element={
                    <PublicRouter isAuthenticated={isLoggedIn}>
                        <SignUp/>
                    </PublicRouter>
                } />

                
                <Route path="/*" element={
                    <PrivateRouter isAuthenticated={isLoggedIn}>
                        <DashboardRouter/>
                    </PrivateRouter>
                }/>
            
        </Routes>

        
    </Router>

);
}