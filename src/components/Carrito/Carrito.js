import { Button } from 'reactstrap'
import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {contextoCarrito} from '../Contexto/cartContext'
import './estilosCarrito.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Carrito = () => {
  const {carrito, eliminarProducto, clearCart, getSubtotal, getTotal,cartLenght } = useContext(contextoCarrito)

  return (
     <>
  {cartLenght() ===  0 ? (
      <div className='noItemContainer'>
        <div className='cartNoItems'> 
          <h4>El carrito esta vacio</h4>
          <h6>La ropa perfecta para vos te espera, suma algo!</h6>
          <Button className='btnVolverTienda' tag={Link} to='/'> Volver a la tienda </Button>
      </div>
      </div>
    ) : ( 
      <div className='cart'> 
        <h2> Carrito </h2>
        <div className='cartSubt'>
          <h5>Producto</h5>
          <h5>Nombre</h5>
          <h5>Precio Unit</h5>
          <h5>Cantidad</h5>
          <h5>Subtotal</h5>
          <h5>Eliminar</h5>
        </div>
          {carrito.map(product => 
            <div key={product.id} > 
            <div className="productinCart">
              <img 
              src={product.image}
              alt=""
              />
              <h6> {product.name}</h6>
              <div className='unidadCart'>
                P. Unit {product.price} $
              </div>
              <div className='cantidadCart'> 
                 {product.quantity}
              </div>
              <div className='subtotalCart'>
                Precio: {getSubtotal(product.price, product.quantity)}$
              </div>
              <div className='btnDeleteItemCart'>
                <button onClick={() =>{eliminarProducto(product.id)}}> 
                   <FontAwesomeIcon icon={faTrash}/>
                 </button>
              </div>
            </div>
              </div> 
            )
          }
          <div className='cartCheck'>
            <h3>Precio total ${getTotal()} </h3>
            <div className='btnsCart'>
              <Button onClick={clearCart} color='dark'>Limpiar Carrito</Button>
              <Button tag={Link} to="/" color="dark" className='btnCart'>Seguir comprando</Button>
              <Button tag={Link} to="/checkout" color="success" className='btnCart'>Confirmar Compra</Button>
            </div>
          </div>
    </div>
 )}
  </>
)}
  export default Carrito
