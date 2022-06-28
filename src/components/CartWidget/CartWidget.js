import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { contextoCarrito } from '../Contexto/cartContext'


const CartWidget = () => {

  const {cartLenght} = useContext(contextoCarrito)
 

 
  return (
    <>
    <Link to="/carrito"> Comprar</Link>
    <div className='itemsCart'> {cartLenght()}  </div>
   
    <div className='material-symbols-outlined'>shopping_cart</div>
    </>
   
   )
}

export default CartWidget