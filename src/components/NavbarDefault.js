
import React from 'react'
import { Button,Container, Navbar} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { searchAsync } from '../actions/ItemsAction'
// import { useForm } from '../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { logoutAsync } from '../actions/loginAction'


export const NavbarDefault = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }

    

    // const [ values, handleInputChange] = useForm('')

   

 

    return (
        <>

<nav className="navbar navbar-expand-lg navbar-light text-white bg-dark ">
<div className="container-fluid d-flex  justify-content-between">
  
    
    <Navbar.Brand href="#">
      <img
        src="https://ianars.github.io/Pok-dex/images/pokedeex.png"
        width="200"
        height="100"
    
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  
    <button className="btn btn-danger me-2" onClick = {() => handleLogout()}> Logout </button>
    
  </div>
  </nav>


            {/* <nav className="navbar navbar-expand-lg navbar-light text-white  ">
                <div className="container-fluid d-flex  justify-content-between">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Navbar.Brand className="text-white"><Link to="/home"><img alt="logo Amazonas" src="https://ianars.github.io/Pok-dex/images/pokedeex.png" /></Link></Navbar.Brand>
                    <div className="collapse navbar-collapse d-flex  justify-content-between" id="navbarTogglerDemo03">






                        <button className="btn btn-danger me-2" onClick = {() => handleLogout()}> Logout </button>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

