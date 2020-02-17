import React from "react";
import { Link } from "react-router-dom";
import "./Style/Nav.css";
import logo from "./Style/logo.png";

function Nav() {
  return (
    <div>
      <div className='nav-list'>
        <div className='navs'>
          <img className='logo-me' src={logo} alt='' />
        </div>
        <div className='navs my-name'>Steven Hofheins</div>
        <div className='navs contact-me'>
          <Link className='contact-link' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
