import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { contextoCarrito } from '../Contexto/cartContext'


const CartWidget = () => {

  const getContext = useContext(contextoCarrito)
 

 
  return (
    <>
    <Link to="/carrito"> Comprar</Link>
    {getContext.cantidad_total}
    <div className='material-symbols-outlined'>shopping_cart</div>
    </>
   
   )
}

export default CartWidget