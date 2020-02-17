import React from "react";
import "./Style/Footer.css";
function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='footer-options'>
          <a className='social-icon' href=''>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='social-icon'>
            <i className='fab fa-github-square'></i>
          </a>
          <a href='' className='social-icon'>
            <i className='fab fa-instagram-square'></i>
          </a>
          <a href='' className='social-icon'>
            <i class='fab fa-medium'></i>
          </a>
        </div>
        <div className='footer-options'></div>
      </div>
    </div>
  );
}

export default Footer;
