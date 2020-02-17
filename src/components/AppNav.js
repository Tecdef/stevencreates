import React from "react";
import { Link } from "react-router-dom";
import "./Style/AppNav.css";

function AppNav() {
  return (
    <div>
      <div className='layout-container'>
        <div className='app-list'>
          <Link to='/' className='apps'>
            <i class='fal fa-address-card'></i>
          </Link>
          <Link to='/stats' className='apps center-app'>
            <i class='fal fa-project-diagram'></i>
          </Link>
          <Link className='apps'>
            <i class='fal fa-users'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppNav;
