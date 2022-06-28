import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { contextoCarrito } from '../Contexto/cartContext'
import "../Navbar/estilosNavbar.css"

const CartWidget = () => {

  const {cartLenght} = useContext(contextoCarrito)
 

 
  return (
    <div className='cartWidget'>
      <div className='itemsCart'> {cartLenght()}  </div>
      <div className='material-symbols-outlined'><Link to="/carrito"> shopping_cart</Link> </div>
    </div>
   
   )
}

export default CartWidget