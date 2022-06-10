import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { traerProductos } from '../../utils/productos'




const ItemListContainer = () => {
  const [items, setItems] = useState([])
 
  useEffect(() => {
    traerProductos() 
    .then( r => setItems(r))
    
  }, [])
 


  return (
    <>
    <ItemList products={items} />
  
    </>
  )
}

export default ItemListContainer