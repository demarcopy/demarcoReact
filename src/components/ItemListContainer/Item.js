import React from 'react'

const Item = ({name, id, image,  description, price, stock }) => {
  return (
  
  
  <div className='Item' key={id}>
      <img src={image} alt={id}/> 
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Precio:{price}</p>
      <button> Ver detalles</button> 
      </div>
  </div>
  )
}

export default Item