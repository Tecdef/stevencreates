import React from "react";
import styled from "styled-components";
import StevenCreates from "./Assets/StevenCreates.JPG";
import { MediumFeed } from "./components/MediumFeed";
import { QuickInfo } from "./components/QuickInfo";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-column-gap: 2em;
  max-width: 1600px;
  background: gray;
  margin: 4rem auto 4rem auto;
  div {
    --background: pink;
    &:nth-child(1) {
      background: blue;
    }
  }
  img {
    width: 400px;
  }
`;

function App() {
  return (
    <GridStyles>
      <div>
        <img src={StevenCreates} alt='Steven Hofheins' />
        <div>
          <QuickInfo />
        </div>
      </div>
      <div>2 </div>
      <div>3</div>
    </GridStyles>
  );
}

export default App;
