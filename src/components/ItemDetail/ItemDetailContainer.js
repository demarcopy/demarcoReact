import React,  { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import './estilosdetail.css'
import {Loading} from '../../utils/Loading'
import {collectionProd} from '../../utils/firebase'
import {getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const  {id} = useParams()
  useEffect(() => {
    const ref = doc(collectionProd, id)
    getDoc(ref)
    .then((response) =>{
      setProduct(response.data())
      setLoading(false)
    })
    .catch((error) =>{
      console.log(error)
    })
  }, [id])
  return (
    <>
    { isLoading ?   <Loading/>   :  <ItemDetail product={product}/>  }
    </>
  )
}

export default ItemDetailContainer