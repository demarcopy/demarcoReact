import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {contextoCarrito} from '../Contexto/cartContext'
import './estilosCarrito.css'


/* const objetohard =  [
  {
  name: 'Remera de algodon',
  image: 'https://mensfactory.com.uy/wp-content/uploads/2020/10/REMERA-LISA-NEGRA_01.jpg',
  id: 1,
  stock: 5,
  category: 'Remeras',
  price: 200,
  },
  3
] */



const Carrito = () => {
  
  const {carrito, eliminarProducto, clearCart, getSubtotal, getTotal,cartLenght } = useContext(contextoCarrito)
  
  const prueba = () => {
  console.log('Var Carrito',carrito)
  }

  return (
    <>
     <p> Estas en el carrito</p>
    
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
 
  <button onClick={prueba}> Ver carrito en consola</button>

 
 
  <button onClick={clearCart}> vaciarCarrito</button>
  <button><Link to="/tienda">Seguir comprando</Link></button>


    <Link to="/checkout"> Comprar</Link>
    </>
  )
}

export default Carrito



/* {cart.map((product) => (
  <li key={product.id}>
      <img
        src={product.img}
        alt=""
      />
          <h3>{product.name}</h3>
          <p className="ml-4">${product.price * product.count}</p>
          Cantidad: {product.count} x ${product.price}
          <button
            onClick={() =>
              deleteElement(product.id, product.name)
            }
            type="button"
          >
            Eliminar
          </button> 
  </li>
))} */