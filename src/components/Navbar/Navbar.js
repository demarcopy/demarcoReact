import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom"
import { DropdownItem, DropdownMenu, DropdownToggle, NavItem, UncontrolledDropdown } from 'reactstrap'

const Navbar = () => {
 
  return (
    <nav id="navBar" className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">banshy clothes</NavLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <NavItem>   
        <NavLink to="/" >Inicio</NavLink>
        </NavItem>  
        <UncontrolledDropdown >
        <DropdownToggle caret nav >
          <NavLink to="/Tienda" >Tienda</NavLink>
        </DropdownToggle> 
         <DropdownMenu left>
          <DropdownItem><Link to="/Canguros"> Canguros </Link></DropdownItem>
          <DropdownItem><Link to="/Remeras"> Remeras y Sudaderas </Link></DropdownItem>
          <DropdownItem><Link to="/Pantalones"> Pantalones </Link></DropdownItem>
          <DropdownItem><Link to="/Championes"> Championes </Link></DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem><NavLink to="/Recomendaciones"  >Ofertas</NavLink></NavItem>  
        <NavItem> <NavLink to="/Contacto" >Contacto</NavLink> </NavItem>  
      </div>
    <CartWidget/>
    </div>
  </nav>
 

  )
}

export default Navbar