import React from "react";
import StevenCreates from "./Assets/StevenCreates.JPG";
import { MediumFeed } from "./components/MediumFeed";
import { QuickInfo } from "./components/QuickInfo";

function App() {
  return (
    <div className='app-container grid'>
      <div className='image-section'>
        {/* <img className='image-contain' src={StevenCreates} alt='' /> */}
      </div>
      <div className='quick-info'></div>
    </div>
  );
}

export default App;
