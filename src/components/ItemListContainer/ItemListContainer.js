import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getItems, getItemBycategory } from '../../utils/productos'
import {useParams} from 'react-router-dom'
import './estilosproductos.css'
import {Loading} from '../../utils/Loading'


const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  const {category} = useParams()
  
 
/* Anda bien sin loading*/
useEffect(() => {
  setLoading(true)
    if (category) {
     getItemBycategory(category)
     .then( r => 
    {setItems(r)
     setLoading(false)
    })
    } else {
     getItems()
     .then( r =>
    {setItems(r)
    setLoading(false)
    })
   }}, [category] )



  return (
    <div className='ItemsContainer'>

    { isLoading ? <h1> <Loading/> </h1> : <ItemList  products={items} /> }
    </div>
  )
}

export default ItemListContainer