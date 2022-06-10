import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({name, id, image,  description, price, stock }) => {
  return (
    <div key={id}>
      <h1>{name}</h1>
      <img src={image} alt={id}/> 
      <p>{description}</p>
      <p>Precio:{price}</p>
      <ItemCount StockInitial={1} Stock={stock} />
    
      <button> Ver detalles</button> 
      <hr/>
    </div>
  )
}

export default Item