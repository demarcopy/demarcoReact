import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import './estilosproductos.css'
import {Loading} from '../../utils/Loading'
import {collectionProd} from '../../utils/firebase'
import {getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [items, setItems] = useState([])
 const [isLoading, setLoading] = useState(true)
  const {category} = useParams()
 
  useEffect(() =>{
    const ref = category
    ? query(collectionProd, where(
      "category", "==" ,  category
    ))
    :  collectionProd
    getDocs(ref)
    .then( (resultado) => {
      const productos_mapeados = resultado.docs.map(referencia =>{
        const aux = referencia.data()
        aux.id = referencia.id
        return aux
      })
      setItems(productos_mapeados)
      setLoading(false)
    })
    .catch((error) =>{
      console.log(error)
    })
  },[category] ) 

  return (
    <div className='ItemsContainer'>
    { isLoading ? <h1> <Loading/> </h1> : <ItemList  products={items} /> }
    </div>
  )
}

export default ItemListContainer