import React from "react";
import { MediumFeed } from "./components/MediumFeed";

function App() {
  return (
    <div className='app-container'>
      <div className='first-column'></div>
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
