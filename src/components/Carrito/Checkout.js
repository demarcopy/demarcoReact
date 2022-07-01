import React from 'react'
import { useState } from 'react'
import swal from 'sweetalert'

const Checkout = () => {

  const [BuyerInfo, setBuyerInfo ] = useState({
    buyerName: "",
    buyerLastName: "",
    buyerEmail: "",
    buyerPhone: ""
})

  const formHandler = ((e) =>{
    e.preventDefault()
    setBuyerInfo({
        ...BuyerInfo,
        [e.target.name]: e.target.value
    })
  }  
  )
 
  const confirmCheckout = (e) => {
    e.preventDefault()
    swal({
      icon: "success",
      text: "Compra realizada"
    })
    // Aca ya esta ok el input para pasarlo a la base de datos.
  }

 

 
 
  return (
    <>
    <hr></hr> 
    <h1 >CHECKOUT</h1>


        <h2 >Ingresa tus datos:</h2>
        <form onSubmit={confirmCheckout}>
            <input  value={BuyerInfo.buyerName} onChange={formHandler} required type="text" name="buyerName"     placeholder="Nombre"></input>
            <input  value={BuyerInfo.buyerLastName} onChange={formHandler} required type="text" name="buyerLastName" placeholder="Apellido"></input>
            <input  value={BuyerInfo.buyerEmail} onChange={formHandler} required type="email" name="buyerEmail" placeholder="email"></input>
            <input className="form-control" value={BuyerInfo.buyerPhone} onChange={formHandler} type="number" name="buyerPhone" placeholder="Celular"></input>
               
                <button type="submit" >
                <h3> Finalizar compra</h3></button>
        </form>

        </>




  )
}

export default Checkout