import React from 'react'

const ItemListContainer = (prop) => {
  return (
    <>
    <div className='bienvenidaTexto' >{prop.greeting} </div>
    <hr></hr>
    <hr></hr>
    
      <ul class="list-group">
        <li class="list-group-item active">Ofertas</li>
        <li class="list-group-item">Novedades</li>
        <li class="list-group-item">Popular ahora</li>
        <li class="list-group-item">Recomendaciones para ti</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
  
 
    </>
  )
}

export default ItemListContainer