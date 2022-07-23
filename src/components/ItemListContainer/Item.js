import React from 'react'
import { Button } from 'reactstrap'
import {Link}  from 'react-router-dom' 

const Item = ({name, id, image,  description, price }) => {
  return (
  <div className='Item' key={id}>
      <img src={image} alt={id}/> 
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Precio:{price}</p>
      <Button color="dark" tag={Link} to={`/tienda/${id}`}> Ver Detalles </Button>
    </div>
  </div>
  )
}

export default Item