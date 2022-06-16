import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getItems } from '../../utils/productos'
import './estilosproductos.css'





const ItemListContainer = () => {
  const [items, setItems] = useState([])
 
  useEffect(() => {
    getItems() 
    .then( r => setItems(r))
    
  }, [])
 


  return (
    <>
    <div className='ItemsContainer'>

    <ItemList products={items} />
    </div>
  
   
    </>
  )
}

export default ItemListContainer