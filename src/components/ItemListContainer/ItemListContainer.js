import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import './estilosproductos.css'
import {Loading} from '../../utils/Loading'
import {collectionProd} from '../../utils/firebase'
import {getDocs, query, where } from 'firebase/firestore'
import {swal} from 'sweetalert'

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
      swal({
        icon: 'error',
        title: 'Ups!',
        text: 'Hubo un error, intentalo mas tarde',
       })
    })
  },[category] ) 

  return (
    <div className='ItemsContainer'>
    { isLoading ? <Loading/>  : <ItemList  products={items} /> }
    </div>
  )
}
export default ItemListContainer