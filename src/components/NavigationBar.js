import React from "react";
import {
  Navbar,
} from "react-bootstrap";

import logoWhite from '../assets/logo-white.png'

const NavigationBar = () => {

    return (
        <Navbar  className="navBar navbar-dark" collapseOnSelect expand="md"
                fixed="top" style={{fontWeight: "550", height:"4rem", backgroundColor:"#343B3F"}}>
          <Navbar.Brand href="/">
            <img src={logoWhite} style={{height: "40px", marginLeft: "-10px", padding:"2px"}}
                 alt={logoWhite}/> SOLITA names
          </Navbar.Brand>
        </Navbar>

    );


};
export default NavigationBar;