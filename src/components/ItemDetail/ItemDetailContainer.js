import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {getItemById} from '../../utils/productos'
import {useParams} from 'react-router-dom'
import './estilosdetail.css'
import Loading from '../../utils/Loading'
import {Button} from 'reactstrap'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const  {id} = useParams()
  useEffect(() => {
      setLoading(true)
      getItemById(parseInt(id))
      .then( r => setProduct(r))
      setLoading(false)
    }, [id])
    
    console.log(loading)
    const volverTienda = () => {
      window.history.back()
    }
  return (
    <div className='ItemDetailContainer' >
      <div className='btn-volver'>
      <Button 
       close
      onClick={volverTienda}
      >
      </Button> 
      </div>
     {!loading ? <ItemDetail product={product}/> :   <Loading/>  }
    </div>
  )
}

export default ItemDetailContainer