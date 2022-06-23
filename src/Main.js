import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Carrito/Checkout'


const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/tienda" element={<ItemListContainer greeting="Bienvenido!" />} />
            <Route path="/tienda/:id" element= {<ItemDetailContainer />} />
            <Route path="/:category" element= {<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    </main>
)
}

export default Main