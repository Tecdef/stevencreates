import React from "react";
import StevenCreates from "./Assets/StevenCreates.JPG";
import { MediumFeed } from "./components/MediumFeed";
import { QuickInfo } from "./components/QuickInfo";

function App() {
  return (
    <div className='app-container'>
      <div className='first-column'>
        <div className='first-column-row'>
          <img className='image-contain' src={StevenCreates} alt='' />
        </div>
        <div className='first-column-second-row'>
          <QuickInfo />
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
