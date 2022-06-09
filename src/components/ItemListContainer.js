import React, { useEffect } from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'

const ItemListContainer = (prop) => {
  const [items, setItems] = useState([])
  useEffect(() => {}, [items])
 
 
 
  return (
    <>
    <div className='bienvenidaTexto' >{prop.greeting} </div>
    <hr></hr>
    <hr></hr>
      <ul className="list-group">
        <li className="list-group-item active">Ofertas</li>
        <li className="list-group-item">Novedades</li>
        <li className="list-group-item">Popular ahora</li>
        <li className="list-group-item">Recomendaciones para ti</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <hr></hr>
      <hr></hr> 
    <ItemCount 
     Stock={5}
     StockInitial={1}
     onAdd={() => { }} 
    />
    </>
  )
}

export default ItemListContainer