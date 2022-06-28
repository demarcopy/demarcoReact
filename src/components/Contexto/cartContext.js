import { createContext, useState } from "react";

export const contextoCarrito  = createContext();

export const CartContext = ({children}) => {
  const [carrito, SetCarrito] = useState([]);
  const [cantidad_total, setCantidadTotal] = useState(0)
  const [precio_total, SetPrecioTotal] = useState(0)
  
  // Verificacion de si esta en el carrito.
const isInCart = (id) =>  carrito.some((e => e.id === id));


  //Agrego item al carrito + validaciones
const addCarrito = (item, quantity) => {
    console.log('Valor validacion', isInCart())
    console.log('Valor Carrito', carrito)
    console.log('Valor id para validacion', item.id)
    const cartCopia = [...carrito]
    console.log('Valor Carrito copia', cartCopia)
  
    if (!isInCart(item.id)) {
       item.quantity = quantity
       SetCarrito([item])
      
    } else {
      const indexItem = carrito.findIndex((e) => (e.id === item.id))
       console.log(indexItem) 
    } 
}

// Remover item del carrito
const eliminarProducto = (id) => {
    SetCarrito(carrito.filter((item) => (item.id !== id)))
}

// Vaciar el carrito
const clearCart = () => {
    SetCarrito([])
    setCantidadTotal(0)
    SetPrecioTotal(0)
}

//Numero de items en carrito
const itemsLenghtCart = () =>{
    let auxiliar = 0
    carrito.forEach((item) =>
    auxiliar = auxiliar + item.auxiliar 
    )
}

const actualizarCantidad = (item, cantidad) => {
    //setCarrito()
}


    // Initial Provider State
    const contextValue = {
        carrito : carrito,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
        addCarrito,
        eliminarProducto,
        actualizarCantidad,
        clearCart,
        isInCart,
        itemsLenghtCart

    };

    return (
        <contextoCarrito.Provider value={contextValue}>
            {children}
        </contextoCarrito.Provider>
    );
}

