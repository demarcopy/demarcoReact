import React, {useState, useContext }from 'react'
import swal from 'sweetalert'
import {serverTimestamp, addDoc, collection} from 'firebase/firestore'
import {db} from '../../utils/firebase'
import {contextoCarrito} from '../Contexto/cartContext'

const Checkout = () => {
  const {carrito, clearCart, getTotal } = useContext(contextoCarrito)
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
  })
  const confirmCheckout = (e) => {
    e.preventDefault();
    const objOrden ={
      buyer: {
        name: BuyerInfo.buyerName,
        LastName: BuyerInfo.buyerLastName,
        Email: BuyerInfo.buyerEmail,
        Phone: BuyerInfo.buyerPhone,
      },
      carrito,
      total: getTotal() ,
      date: serverTimestamp(),
    }
    const ref = collection(db, 'orders')
    addDoc(ref, objOrden).then((r) =>{
        clearCart()
        swal({
          title: 'Compra realizada',
          text:  `Tu ID de la orden es: ${r.id}  `,
          icon: "success"
        })
      })
    } 
  return (
    carrito.length > 0 ? 
    <div className='cartCheckout'>
      <div className='checkoutForm'>
        <h2 >Ingresa tus datos:</h2>
        <form onSubmit={confirmCheckout}>
            <input className='form-control' value={BuyerInfo.buyerName} onChange={formHandler} required type="text" name="buyerName"     placeholder="Nombre"></input>
            <input className='form-control'  value={BuyerInfo.buyerLastName} onChange={formHandler} required type="text" name="buyerLastName" placeholder="Apellido"></input>
            <input className='form-control'  value={BuyerInfo.buyerEmail} onChange={formHandler} required type="email" name="buyerEmail" placeholder="email"></input>
            <input className="form-control" value={BuyerInfo.buyerPhone} onChange={formHandler} type="number" name="buyerPhone" placeholder="Celular"></input>
                <button className='btnCheckout'  type="submit" >
                <h3> Finalizar compra</h3></button>
        </form>
      </div>
    </div>
    : <h1> No hay nada en el carrito</h1>
  )
}
export default Checkout