import React,  { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {getItemById} from '../../utils/productos'
import {useParams} from 'react-router-dom'
import './estilosdetail.css'
import Loading from '../../utils/Loading'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const  {id} = useParams()
  useEffect(() => {
      setLoading(true)
      getItemById(parseInt(id))
      .then( r =>
        {setProduct(r)
        setLoading(false)
        }
        )
  }, [id])
  return (
    <>
    { isLoading ?   <Loading/>   :  <ItemDetail product={product}/>  }
    </>
  )
}

export default ItemDetailContainer