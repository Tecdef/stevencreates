import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import BouncingName from "./components/BouncingName";
import NAME from "./components/Name";

const GridStyles = styled.div`
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
      <div style={{ marginTop: "3rem", marginLeft: "3rem" }}>
        <motion.div
          style={{
            height: 30,
            width: 30,
            borderRadius: 5,
            background: "white",
            display: "inline-block",
            marginRight: "1.5rem",
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 10,
          }}
        />

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
        <motion.div
          onHoverStart={{ scale: 1.2 }}
          style={{
            height: 30,
            width: 30,
            borderRadius: 5,
            background: "white",
            display: "inline-block",
            marginLeft: "1.5rem",
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 10,
          }}
        />
      </div>
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
