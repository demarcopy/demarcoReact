import React from 'react'
import { useState, useEffect } from 'react'
import { getItem } from '../../utils/productos'
import ItemDetail from './ItemDetail'
import './estilosdetail.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
  
    useEffect(() => {
      getItem()
      .then( r => setProduct(r))
    }, [])


  
  return (
    
    <div className='ItemDetailContainer' >


    
    
   
    <ItemDetail product={product} />



    

    </div>
  )
}

export default ItemDetailContainer