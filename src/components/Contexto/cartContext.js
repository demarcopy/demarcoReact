import { createContext, useState } from "react";

export const contextoCarrito  = createContext();



export const CartContext = ({children}) => {
  const [carrito, SetCarrito] = useState([]);
  const [cantidad_total, setCantidadTotal] = useState(0)
  const [precio_total, SetPrecioTotal] = useState(0)
  
  // Verificacion de si esta en el carrito.
  const isInCart = (id) =>  carrito.some((e => e.id === id))
  
  //Agrego item al carrito + validaciones
  const addCarrito = (item, quantity) => {
  
      const copyCart = [...carrito]
      
      if (isInCart(item.id)) {
        //Ya esta ese item en el Array
        const indexItem = carrito.findIndex((e) => (e.id === item.id))
        const cantidadItem = copyCart[indexItem].quantity
        const resultado = cantidadItem + item.quantity
        console.log('Ya hay item en el Array') 
          // Hay stock?
            if (resultado > item.stock) {
             console.log("No hay mas stock")
            }else{ //Hay stock, asi que lo pusheo
            item.quantity = copyCart[indexItem].quantity  += quantity
            console.log('Ya hay item, suma cantidad',item) 
                SetCarrito([...carrito,item])
            }
        }
        //Este item no esta en el Array, lo pusheo al carrito.
     else {
            item.quantity = quantity
            SetCarrito([...carrito,item])
            console.log('Este item no esta en el Array, pusheo',item) 
  
        } 
}

// WIP
const actualizarCantidad = (item) => {
    const copyCart = [...carrito]
    const indexItem = carrito.findIndex((e) => (e.id === item.id))
    const cantidadItem = copyCart[indexItem].quantity
    const resultado = cantidadItem + item.quantity
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

//Numero de items en carrito WIP
const cartLenght = () => {
    let cantidadTotal = 0
    carrito.forEach((item) => {
        cantidadTotal = cantidadTotal + item.quantity
    })
    return cantidadTotal
}

//Precio item acumulado
const getSubtotal = (price, quantity) => {
    let subtotal = 0
    subtotal = subtotal + (price * quantity)
    return Number(subtotal)
}


//Precio Carrito Acumulado
const getTotal = () => {
    let total = 0
    carrito.forEach((item) => {
        total = total + (item.quantity * item.price)
    })
    return Number(total)
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

