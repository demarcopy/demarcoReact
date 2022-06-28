import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import {NavLink} from "react-router-dom"
import {NavItem } from 'reactstrap'

const Navbar = () => {
 
  return (
    <nav id="navBar" className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">banshy clothes</NavLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <NavItem> <NavLink to="/" >Inicio</NavLink> </NavItem>  
          <NavLink to="/Tienda" >Tienda</NavLink>
          <NavLink to="/Canguros"> Canguros </NavLink>
          <NavLink to="/Remeras"> Remeras y Sudaderas </NavLink>
          <NavLink to="/Pantalones"> Pantalones </NavLink>
          <NavLink to="/Championes"> Championes </NavLink>
        <NavItem> <NavLink to="/Recomendaciones"  >Ofertas</NavLink> </NavItem>  
        <NavItem> <NavLink to="/Contacto" >Contacto</NavLink> </NavItem>  
      </div>
    <CartWidget/>
    </div>
  </nav>
 

  )
}

export default Navbar