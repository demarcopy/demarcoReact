import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"
import { NavbarBrand, NavItem } from 'reactstrap';
import "./estilosNavbar.css"

const Navbar = () => {
  return (
    <div id="navBarConteiner" className="navbar navbar-expand-lg bg-light">
      <NavbarBrand className='navbarBrand' tag={Link} to ="/"> banshy clothes </NavbarBrand>
        <div className="tienda-navbar">
          <NavItem className='navBarItem' tag={Link} to="/Canguros"> Canguros </NavItem>
          <NavItem className='navBarItem' tag={Link} to="/Remeras"> Remeras </NavItem>
          <NavItem className='navBarItem' tag={Link} to="/Pantalones" > Pantalones </NavItem>
        </div>
      <CartWidget/>
  </div>
  )
}
export default Navbar
