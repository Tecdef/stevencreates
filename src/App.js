import React from "react";
import styled from "styled-components";
import "./App.css";
import BouncingName from "./components/BouncingName";
import { QuickInfo } from "./components/QuickInfo";

const GridStyles = styled.div`
  font-family: "DM Sans", sans-serif;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  border-radius: 4px;
  max-width: 1600px;
  background: rgba(255, 255, 255, 0.075);
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

let COLORS = ["#BB55FF", "#FFBBDD", "#FFFFFF"];

const NAME = [
  {
    letter: "S",
    size: "36",
    delay: 1,
    startPoint: Math.floor(Math.random() * 10),
    // endPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
];

function App() {
  return (
    <>
      {NAME.map((name) => (
        <BouncingName
          letter={name.letter}
          size={name.size}
          delay={name.delay}
          startPoint={name.startPoint}
          // endPoint={}
          color={name.color}
        />
      ))}
      <GridStyles>
        <div className='image-container'>
          <div></div>
        </div>
        <div></div>
        <div>3</div>
      </GridStyles>
    </>
  );
}

export default App;
