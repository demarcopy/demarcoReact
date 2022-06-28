import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {contextoCarrito} from '../Contexto/cartContext'
import './estilosCarrito.css'

const Carrito = () => {
  
  const {carrito, eliminarProducto, clearCart, getSubtotal, getTotal,cartLenght } = useContext(contextoCarrito)
  
  return (
     <>
  {cartLenght() ===  0 ? (
      <p>No hay productos en el carrito, suma algo!</p>
    ) : ( 
      <div> 
        <div className="productinCart">
        {carrito.map(product => 
          <div key={product.id} > 
            <h3> {product.name}</h3>
            <img 
            src={product.image}
            alt=""
            />
            <div> 
              Cantidad en carrito: {product.quantity}
            </div>
            <div>
              Precio: {getSubtotal(product.price, product.quantity)}
            </div>
            <div>
              <button onClick={() =>{eliminarProducto(product.id)}}> Borrar producto</button>
            </div>
          </div>
          )
        }
          <h3>Precio total {getTotal()} </h3>
          <h3>Items totales: {cartLenght()}</h3>
        </div> 
      <div>
        <button onClick={clearCart}> vaciarCarrito</button>
        <button><Link to="/tienda">Seguir comprando</Link></button>
        <Link to="/checkout"> Comprar</Link>
      </div>
    </div>
 )}
  
  </>
)}

  export default Carrito

