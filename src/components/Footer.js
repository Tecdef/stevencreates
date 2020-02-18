import React from "react";
import "./Style/Footer.css";
function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='footer-options'>
          <a
            className='social-icon'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/steven-hofheins/'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Tecdef'
            className='social-icon'>
            <i className='fab fa-github-square'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/zstorm.tech/'
            className='social-icon'>
            <i className='fab fa-instagram-square'></i>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://medium.com/@steven_creates'
            className='social-icon'>
            <i className='fab fa-medium'></i>
          </a>
        </div>
        <div className='footer-options'></div>
      </div>
    </div>
  );
}

export default Footer;
