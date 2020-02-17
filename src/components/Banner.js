import React from "react";
import "./Style/Banner.css";

function Banner() {
  return (
    <div className='layout-container'>
      <div className='banner-background'>
        <div className='circle-image'></div>
        <div className='about-stats'>
          <div>Some Stat:</div>
          <div>Some Stat:</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
