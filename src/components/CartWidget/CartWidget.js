import React from 'react'
import { Link } from 'react-router-dom'
import Checkout from '../Carrito/Checkout'

const CartWidget = () => {
  return (
    <>
    <Link to="/carrito"> Comprar</Link>
    
    <div className='material-symbols-outlined'>shopping_cart</div>
    </>
   
   )
}

export default CartWidget