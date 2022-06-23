import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getItems, getItemBycategory } from '../../utils/productos'
import {useParams} from 'react-router-dom'
import './estilosproductos.css'
import Loading from '../../utils/Loading'



const ItemListContainer = () => {
  const [items, setItems] = useState([])

  const {category} = useParams()

   useEffect(() => {
   category === undefined ? getItems().then(items => setItems(items)) : getItemBycategory(category).then(items => setItems(items))
  }, [category])
   
  return (
    <div className='ItemsContainer'>
    {
      items.length > 0 ?  <ItemList products={items} />:  <Loading/>
    }
    </div>
  )
}

export default ItemListContainer