import React from "react";
import styled from "styled-components";
import StevenCreates from "./Assets/StevenCreates.JPG";
import { MediumFeed } from "./components/MediumFeed";
import { QuickInfo } from "./components/QuickInfo";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-column-gap: 2em;
  max-width: 1000px;
  background: gray;
`;

function App() {
  return (
    <GridStyles>
      <div> test</div>
      <div className='quick-info'></div>
    </GridStyles>
  );
}

export default App;
