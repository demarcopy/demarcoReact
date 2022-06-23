import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from "react-router-dom"

const ItemDetail = ({product}) => {

  const [itemsCount, setItemCount] = useState(0)


  const onAdd = (cantidadItems) => {
    setItemCount (cantidadItems )
  }





  return (
  <div className='ItemDetail'  key={product.id}>
    <img src={product.image} alt={product.id}/> 
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio:{product.price}</p> 

     
      {
        itemsCount > 0 ? <button><Link to="/carrito">Terminar Compra</Link></button> : <ItemCount StockInitial={1} Stock={product.stock} onAdd={onAdd}  />
      }
   
    
    
    
    
    </div>
  </div>
  )
}

export default ItemDetail