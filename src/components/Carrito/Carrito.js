import React from 'react'
import Checkout from './Checkout'
import {Link} from "react-router-dom"

const Carrito = () => {
  return (
    <>
     <p> Estas en el carrito</p>
    <Link to="/checkout"> Comprar</Link>
    
    </>



  )
}

export default Carrito