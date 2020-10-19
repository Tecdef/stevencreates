import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import BouncingName from "./components/BouncingName";

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

let COLORS = ["#487E80", "#E6D2D1", "#3E496C"];

const NAME = [
  {
    letter: "S",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "T",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "E",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "V",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "E",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "N",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "C",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "R",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "E",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "A",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "T",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "E",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
  {
    letter: "S",
    size: "48",
    delay: Math.floor(Math.random() * 1.5),
    startPoint: Math.floor(Math.random() * 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  },
];

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
