import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

const Item = ({name, id, image,  description, price, stock }) => {
  return (
    <div className='Item' key={id}>
      <img src={image} alt={id}/> 
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Precio:{price}</p>
      <Button
    color="dark"  
    outline
  >
      <Link to={`/tienda/${id}`}> Ver detalles </Link>
  </Button>

      </div>
  </div>
  )
}

export default Item