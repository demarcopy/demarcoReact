import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    products.map(p =>
         <Item
         id={p.id}
         name={p.name}
         image={p.image}
         key={p.id}
         stock={p.stock}
         description={p.description}
         price={p.price}
         />
        )
  )
}

export default ItemList