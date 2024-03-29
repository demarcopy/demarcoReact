import React, { useState } from 'react'
import { Button } from 'reactstrap'

const ItemCount = ({Stock, StockInitial, onAdd}) => {
  const [contador, setContador] = useState(StockInitial)	
  
  const aumentarContador= () =>{
  setContador(contador+1)
  }
  const bajarContador =() =>{
  if (contador > 0) {
  setContador(contador-1)
    }
  }
 const confirmarContador =(e) =>{
  if (contador > 0) {
  onAdd(contador)
   } 
  }

    return (
    <>
      <div className='itemCount'>
        <Button onClick={bajarContador} size="sm" color='dark'>-</Button>
        <p className='countItem'>{contador}</p>
        <Button onClick={aumentarContador} size="sm" color='dark'>+</Button>
      </div>
      <Button onClick={confirmarContador} className='btnaddCarrito' color="dark"> Agregar al carrito</Button>
    </>
  )
}

export default ItemCount