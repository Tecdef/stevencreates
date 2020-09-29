import React from "react";

export const QuickInfo = () => {
  return (
    <>
      <div className='name-class'>Steven Hofheins</div>
      <div className='about-container'>
        <div className='about-item'>
          <span className='item-title'>Location</span>
          <span className='item-desc'>Utah</span>
        </div>
        <div className='about-item'>
          <span className='item-title'>Company</span>
          <span className='item-desc'>Adobe</span>
        </div>
        <div className='about-item'>
          <span className='item-title'>Title</span>
          <span className='item-desc'>Engineer</span>
        </div>
        <div className='about-item'>
          <span className='item-title'>Experience</span>
          <span className='item-desc'>6+ Years</span>
        </div>
        <div className='about-item'>
          <span className='item-title'>Fav. Lang</span>
          <span className='item-desc'>JavaScript</span>
        </div>
      </div>
    </>
  );
};
