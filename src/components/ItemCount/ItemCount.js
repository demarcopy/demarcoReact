import React from 'react'
import { useState } from 'react'

const ItemCount = ({Stock, StockInitial, onAdd}) => {
  const [contador, setContador] = useState(StockInitial)	
  
  const aumentarContador= () =>{
      if (contador < Stock) {
        setContador(contador+1)
      }
  }
  const bajarContador =() =>{
    if (contador > 0) {
      setContador(contador-1)
    }
  }
 const confirmarContador =(e) =>{
    if (contador > 0) {
      onAdd(contador)
    }  else{
      console.log('No se agregaron productos')
    }
  
  }

    return (
      <>
      <p> Cantidad  {contador}</p>
      <button onClick={bajarContador} >- </button>
      <button onClick={aumentarContador} >+ </button>
      <button onClick={confirmarContador} >Agregar al carrito </button>
      </>
  )
   
}

export default ItemCount