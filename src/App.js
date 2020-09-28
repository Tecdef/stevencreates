import React from "react";
import StevenCreates from "./Assets/StevenCreates.JPG";
import { MediumFeed } from "./components/MediumFeed";

function App() {
  return (
    <div className='app-container'>
      <div className='first-column'>
        <div className='first-column-row'>
          <img className='image-contain' src={StevenCreates} alt='' />
        </div>
        <div className='first-column-second-row'>
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
          </div>
        </div>
      </div>
      <div className='second-column'>
        <MediumFeed />
      </div>
      <div className='third-column'>
        <MediumFeed />
      </div>
    </div>
  );
}

export default App;
