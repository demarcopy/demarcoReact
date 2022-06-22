import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    products.map(p =>
         <div className='shoplist'  key={p.id}> 
          <Item
         id={p.id}
         name={p.name}
         image={p.image}
         stock={p.stock}
         description={p.description}
         price={p.price}
         />
         </div>
        )
  )
}

export default ItemList