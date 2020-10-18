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

function App() {
  return (
    <>
      <BouncingName
        letter='S'
        size='36'
        delay={1}
        startPoint={10}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='T'
        size='36'
        delay={0}
        startPoint={5}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='E'
        size='36'
        delay={0.2}
        startPoint={15}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='V'
        size='36'
        delay={0.1}
        startPoint={6}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='E'
        size='36'
        delay={1}
        startPoint={10}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='N'
        size='36'
        delay={0.1}
        startPoint={9}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='H'
        size='36'
        delay={0}
        startPoint={3}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='O'
        size='36'
        delay={0.8}
        startPoint={8}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='F'
        size='36'
        delay={0.1}
        startPoint={10}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='H'
        size='36'
        delay={0}
        startPoint={10}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='E'
        size='36'
        delay={0.3}
        startPoint={10}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='I'
        size='36'
        delay={0.4}
        startPoint={10}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='N'
        size='36'
        delay={0}
        startPoint={10}
        // endPoint={}
        color='#FFBBDD'
      />
      <BouncingName
        letter='S'
        size='36'
        delay={0.2}
        startPoint={10}
        // endPoint={}
        color='#FFBBDD'
      />
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
