import { Button } from 'reactstrap'
import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {contextoCarrito} from '../Contexto/cartContext'
import Checkout from './Checkout'
import './estilosCarrito.css'

const Carrito = () => {
  
  const {carrito, eliminarProducto, clearCart, getSubtotal, getTotal,cartLenght } = useContext(contextoCarrito)

  return (
     <>
  {cartLenght() ===  0 ? (
      <div> 
        <p>No hay productos en el carrito, suma algo!</p>
        <button > <Link to="/tienda"> Volver a la tienda</Link> </button>
      </div>


    ) : ( 
      <>
      <div> 
          <Button
           tag={Link}  
           to="/tienda"
           color="success" 
           className='btnCart'
           >Seguir comprando </Button>
          <Button
           onClick={clearCart} 
           color='secondary'
           >vaciarCarrito </Button>
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
    </div>

       
        
          <Checkout carrito ={carrito} total ={getTotal()}/>
      </>
       
 )}
  
  </>
)}

  export default Carrito

