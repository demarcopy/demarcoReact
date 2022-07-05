import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./estilosNavbar.css"

const Navbar = () => {
 
  return (
 
    <div id="navBarConteiner" className="navbar navbar-expand-lg bg-light">
    <NavLink to="/" className="navbar-brand">banshy clothes</NavLink>
      <div className="navBar">
        <div className="tienda-navbar">
              <UncontrolledDropdown >
                <DropdownToggle caret  tag={Link} to="/tienda">  Tienda   </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem tag={Link} to="/Canguros"> Canguros </DropdownItem>
                    <DropdownItem tag={Link} to="/Remeras"> Remeras y Sudaderas </DropdownItem>
                    <DropdownItem tag={Link} to="/Pantalones" > Pantalones </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown > 
        </div>
    </div>
              <CartWidget/>
  </div>


  )
}

export default Navbar


