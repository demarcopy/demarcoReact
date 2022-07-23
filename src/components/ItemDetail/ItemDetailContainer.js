import React,  { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import './estilosdetail.css'
import {Loading} from '../../utils/Loading'
import {collectionProd} from '../../utils/firebase'
import {getDoc, doc } from 'firebase/firestore'
import swal from 'sweetalert'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const  {id} = useParams()
  useEffect(() => {
    const ref = doc(collectionProd, id)
    getDoc(ref)
    .then((response) =>{
      const itemMapeado = response.data()
      itemMapeado.id = response.id
      setProduct(itemMapeado)
      setLoading(false)
    })
    .catch((error) =>{
     swal({
      icon: 'error',
      title: 'Ups!',
      text: 'Hubo un error, intentalo mas tarde',
     })
    })
  }, [id])
  return (
    <>
    { isLoading ?   <Loading/>   :  <ItemDetail product={product}/>  }
    </>
  )
}
export default ItemDetailContainer