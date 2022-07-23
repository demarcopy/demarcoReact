import React, { useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Button} from 'reactstrap'
import {contextoCarrito} from '../Contexto/cartContext'

const ItemDetail = ({product}) => {
  const addItemToCart = useContext(contextoCarrito)
  
  const onAdd = (cantidadItems) => { 
    addItemToCart.addCarrito(product, cantidadItems)
  }

  const volverTienda = () => {
    window.history.back()
  }

  return (
  <div className='ItemDetailConteiner'  key={product.id}>
  <div className='btn-volver'>
    <Button close onClick={volverTienda} size="lg"> </Button> 
  </div>
    <div className='ItemDetail'>
      <div className='itemImg'>  
        <img src={product.image} alt={product.id}/> 
      </div>
      <div className='ItemContent'>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio:{product.price}</p> 
        <ItemCount StockInitial={1} Stock={product.stock} onAdd={onAdd} />
      </div>
    </div>
  </div>
  )
}
export default ItemDetail