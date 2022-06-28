import { createContext, useState } from "react";

export const contextoCarrito  = createContext();

export const CartContext = ({children}) => {
  const [carrito, SetCarrito] = useState([]);
  const [cantidad_total, setCantidadTotal] = useState(0)
  const [precio_total, SetPrecioTotal] = useState(0)
  
  const isInCart = (id) =>  carrito.some((e => e.id === id))
  
  const addCarrito = (item, quantity) => {
  
      const copyCart = [...carrito]
      
      if (isInCart(item.id)) {
        const indexItem = carrito.findIndex((e) => (e.id === item.id))
        const cantidadItem = copyCart[indexItem].quantity
        const resultado = cantidadItem + item.quantity
            if (resultado > item.stock) {
                console.log("No hay mas stock") // Pasar a Swal
            }else{ 
            item.quantity = copyCart[indexItem].quantity  += quantity
                SetCarrito([item])
            }
        }
     else {
            item.quantity = quantity
            SetCarrito([...carrito,item])
        } 
}


const eliminarProducto = (id) => {
    SetCarrito(carrito.filter((item) => (item.id !== id)))
}

const clearCart = () => {
    SetCarrito([])
    setCantidadTotal(0)
    SetPrecioTotal(0)
}

const cartLenght = () => {
    let cantidadTotal = 0
    carrito.forEach((item) => {
        cantidadTotal = cantidadTotal + item.quantity
    })
    return cantidadTotal
}

const getSubtotal = (price, quantity) => {
    let subtotal = 0
    subtotal = subtotal + (price * quantity)
    return Number(subtotal)
}

const getTotal = () => {
    let total = 0
    carrito.forEach((item) => {
        total = total + (item.quantity * item.price)
    })
    return Number(total)
}

    const contextValue = {
        carrito : carrito,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
        addCarrito,
        eliminarProducto,
        clearCart,
        isInCart,
        cartLenght,
        getSubtotal,
        getTotal,
    };

    return (
        <contextoCarrito.Provider value={contextValue}>
            {children}
        </contextoCarrito.Provider>
    );
}

