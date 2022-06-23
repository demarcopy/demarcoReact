import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from "react-router-dom"
import {Button} from 'reactstrap'


const ItemDetail = ({product}) => {

  const [itemsCount, setItemCount] = useState(0)


  const onAdd = (cantidadItems) => {
    setItemCount (cantidadItems )
  }

  const volverTienda = () => {
    window.history.back()
  }



  return (
    <>

  <div className='ItemDetailConteiner'  key={product.id}>
  
  <div className='btn-volver'>

    <Button 
      close
      onClick={volverTienda}
      size="lg"
      >
    </Button> 

   </div>


    

    <div className='ItemDetail'>
     <img src={product.image} alt={product.id}/> 
      <div className='ItemContent'>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Precio:{product.price}</p> 
        {
          itemsCount > 0 ? <button><Link to="/carrito">Terminar Compra</Link></button> : <ItemCount StockInitial={1} Stock={product.stock} onAdd={onAdd} />
        }
    
      </div>
    </div>
  </div>

  </>
  )
}

export default ItemDetail