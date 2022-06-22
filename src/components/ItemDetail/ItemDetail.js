import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  return (
  <div className='ItemDetail'  key={product.id}>
    <img src={product.image} alt={product.id}/> 
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio:{product.price}</p> 
      <ItemCount StockInitial={1} Stock={product.stock} />
    </div>
  </div>
  )
}

export default ItemDetail