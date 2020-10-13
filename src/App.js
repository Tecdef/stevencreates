import React from "react";
import styled from "styled-components";
import StevenCreates from "./Assets/StevenCreates.JPG";
import CardFlip from "./components/CardFlip";
import { MediumFeed } from "./components/MediumFeed";
import { QuickInfo } from "./components/QuickInfo";

const GridStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");
  font-family: "Lato", sans-serif;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  max-width: 1600px;
  background: gray;
  margin: 4rem auto 4rem auto;
  div {
    --background: pink;
  }
  img {
    max-width: 400px;
  }
  @media (max-width: 1100px) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }
`;

function App() {
  return (
    <GridStyles>
      <div className='image-container'>
        <img src={StevenCreates} alt='Steven Hofheins' />
        <div>
          <QuickInfo />
        </div>
      </div>
      <div>
        <CardFlip />
      </div>
      <div>3</div>
    </GridStyles>
  );
}

export default App;
