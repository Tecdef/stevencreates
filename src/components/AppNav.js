import React from "react";
import { Link } from "react-router-dom";
import "./Style/AppNav.css";

function AppNav() {
  return (
    <div>
      <div className='layout-container'>
        <div className='app-list'>
          <Link to='/' className='apps'>
            <i className='fal fa-address-card'></i>
          </Link>
          <Link to='/stats' className='apps center-app'>
            <i className='fal fa-project-diagram'></i>
          </Link>
          <Link to='/social' className='apps'>
            <i className='fal fa-users'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppNav;
