
import React, { useEffect } from 'react'
import { Button, DropdownButton,  FormControl, InputGroup, Dropdown, Navbar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { searchAsync } from '../actions/ItemsAction'
// import { useForm } from '../hooks/useForm'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { logoutAsync } from '../actions/loginAction'
import { useForm } from '../hooks/useForm';
import { getPokeName } from '../helpers/getPokeName'


export const NavbarSearch = ({setPokeList}) => {
    const navigate2 = useNavigate()
    const location = useLocation();

    const {q=''} = queryString.parse(location.search)
    const [formValues, handleInputChange] = useForm({
        searchText: q,
    })

    const { searchText } = formValues


    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }

    const { data } = useSelector(store => store.pokeStore)


    // useEffect(() => {

            
    // }, [q, setPokeList])

    

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
        console.log(searchText)
        console.log(q)
        getPokeName(searchText)
        .then((poke) =>{
            console.log(poke)
            setPokeList([poke])
            })
        
    }

 

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light text-white bg-dark ">
                <div className="container-fluid d-flex  justify-content-between">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Navbar.Brand className="text-white"><Link to="/home"><img alt="logo Amazonas" src="https://ianars.github.io/Pok-dex/images/pokedeex.png" /></Link></Navbar.Brand>
                    <div className="collapse navbar-collapse d-flex  justify-content-between" id="navbarTogglerDemo03">

                    <center>
                        <InputGroup className="search" id="search">
                            <DropdownButton
                                
                                title="All"
                                id="input-group-dropdown-1"
                                
                            >
                            {
                                 data.map((poke, idx) => (
                                <Dropdown.Item href="#">{poke.species.name}</Dropdown.Item>
                                 ))
                            }
                            </DropdownButton>
                            
                            <form className='d-flex' onSubmit={handleSearch}>     
                            <FormControl
                            type="text"
                            placeholder="Flavor of guajalota, drink ..."
                            name='searchText'
                            className='searchInput'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                                // onChange={handleInputChange}
                            />
                            
                            <Button  id="button-addon2" 
                            type='submit'
                            >
                            <i className="fas fa-search"></i>
                            </Button>
                            </form>
                            
                        </InputGroup>
                 </center>



                        <button className="btn btn-danger me-2" onClick = {() => handleLogout()}> Logout </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

