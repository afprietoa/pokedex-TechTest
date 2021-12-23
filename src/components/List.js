import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { loadDataAsync } from '../actions/pokeActions';
import { NavbarSearch } from './NavbarSearch';


const CartContainer = styled.div`
    display: flex; 
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`


const List = () => {
  const [pokeList, setPokeList] = useState(null)

  const dispatch = useDispatch()

  useEffect( () => {
    
        dispatch(loadDataAsync())
        

  }, [])

  const { data } = useSelector(store => store.pokeStore)
 

  useEffect(() => {
    setPokeList(data)
  },[data])
  
  

  console.log(pokeList)
 
  return (
    <>
      {/* <div className='card'>
        <div className='card-header centered'>
          <h5>The Pokedex App</h5>
        </div>
        <div className='card-body'>
          <div className='containerItem'>
            <div className='item'>
              <div className = 'nameItem centered'><p>Name</p></div>
              <div className = 'viewItem centered'><Link to='/details'><p>view</p></Link></div>
            </div>
          </div>
        </div>
      </div>  */}

      <NavbarSearch setPokeList={setPokeList} />
<div className='ctn'>
<div className='cards'>
<div className='cards-header centered' >
          <h5>Pokemons</h5>
        </div>
      <CartContainer>
        
        {
          (pokeList) ?
            (

              pokeList.map((poke, idx) => (



                <Card key={idx} style={{ width: '18rem', margin: '1rem' }}>

                  <Card.Img variant="top" src={poke.sprites.front_default} />

                  <Card.Body className="text-center">
                    <Card.Title className="TitleCard">{poke.species.name}</Card.Title>
                    <Card.Text clasName="TxtCard">
                      <p className="textCard"></p>
                    </Card.Text>
{/* 
                    <Button

                      className="btn btn-success"
                      style={{ backgroundColor: "#d9d2e9", color: "black", borderColor: "#d9d2e9" }}
                    >View
                    </Button> */}
                    <Link to={`/details/${poke.species.name}`}>
                    <input
                      value="Detail"
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={() =>{
                        localStorage.setItem('pokeId',poke.species.name)
                      }} 
                      
                    /></Link>
                  </Card.Body>
                </Card>
              )
              )

            ) :
            <p>Unavailable data</p>

        }
      </CartContainer>
    </div> 
    
    </div>
    </>
  )
}

export default List
