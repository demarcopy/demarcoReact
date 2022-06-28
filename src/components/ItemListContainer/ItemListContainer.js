import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getItems, getItemBycategory } from '../../utils/productos'
import {useParams} from 'react-router-dom'
import './estilosproductos.css'
import {Loading} from '../../utils/Loading'


const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(false)

  const {category} = useParams()
/*  
    No anda 
   useEffect(() => {
   category ?    getItemBycategory(category)  :  getItems()
   .then( r =>setItems(r)  ) 
}, [category])  */
 
/* Anda bien */
useEffect(() => {
    if (category) {
     getItemBycategory(category)
     .then( r =>setItems(r))
    } else{
     getItems()
     .then( r =>setItems(r))
    }
   }, [category]
  )

  /* Anda bien */
/*  useEffect(() => {
  getItemBycategory(category)
  .then( r =>setItems(r))
 }, [category])
    */

 
  return (
    <div className='ItemsContainer'>


    { isLoading ? <Loading/> : <ItemList products={items} /> }
    </div>
  )
}

export default ItemListContainer