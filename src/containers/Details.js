
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { loadPkAsync } from '../actions/pokeActions'
import { NavbarDefault } from '../components/NavbarDefault'

const Details = () => {

const [switchTk, setSwitchTk] = useState(false)
  const pokeName = useParams().url
  console.log(pokeName )


  const dispatch = useDispatch()

  let pokeId = localStorage.getItem('pokeId')
  console.log(pokeId)

  useEffect(() => {
    
      // dispatch(loadPkAsync(pokeName))

      
        console.log(pokeName)
        dispatch(loadPkAsync(pokeName))
    
      
    
  }, [])
  const handleClick = ()=>{
    dispatch(loadPkAsync(pokeName))
    setSwitchTk(true)
  }

  const { dataPk } = useSelector(store => store.pokeStore)
 
  console.log(dataPk)
  return (
    <>
      {/* <div className="detailItem">
        <div className="contentItem">
          <h5>Name</h5>
          <img src='https://i.pinimg.com/736x/f4/95/52/f49552c63e353a6c2b73eada2f8f4671.jpg' alt='' width='200' height='200' />
          
        </div>
      </div> */}
     < NavbarDefault/> 
<br/>
<div className='ctn'>
<center><Button variant="dark" onClick={handleClick}><i class="fas fa-redo"></i> Refresh</Button></center>
{
          (switchTk) ?
            (
<div className="cardDetaill" style={{ display: 'flex', flexDirection: 'row' }}>
              <Card className="text-center" style={{ width: '60rem', height:'30rem', margin:'1rem', flex: 1  }} >
              
              <div className="row no-gutters">
                <div className="col-4">
                <Card.Img variant="top" src={dataPk.sprites.front_default} width='400' height='400' />
                </div>
                
                <div className='col-8'>
                <Card.Body>
                  <Card.Title>{dataPk.name}</Card.Title>
                  <br/><br/>
                  <Card.Text className='text-start ms-5'>
                    
                  <strong>Type:</strong> {dataPk.types[0].type.name}<br/>
                  <strong>Abilities:</strong> {dataPk.abilities[0].ability.name}, {dataPk.abilities[1].ability.name} <br/>
                  <strong>Stats:</strong> <br/>
                  hp: {dataPk.stats[0].base_stat}<br/>
                  attack: {dataPk.stats[1].base_stat}<br/>
                  defense: {dataPk.stats[2].base_stat}<br/>
                  special-attack: {dataPk.stats[3].base_stat}<br/>
                  special-defense: {dataPk.stats[4].base_stat}<br/>
                  speed: {dataPk.stats[5].base_stat}<br/>
                  </Card.Text>
                  <Link to='/home'><Button className='btnD' variant="dark"><i className='fa fa-arrow-left'></i> Back</Button></Link>
                </Card.Body>
                </div>
                </div>
              </Card>
              </div>
            ) :
            <center><p>If it does not appear, please click the refresh button</p></center>

        }
</div>
    </>

  )
}

export default Details
