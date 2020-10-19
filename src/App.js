import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";

import NineSquare from "./components/NineSquare";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function App() {
  return (
    <>
      <GridStyles>
        <FrontPageStyles>
          <div>
            <FirstName>Steven</FirstName>
            <SecondName className='background-clip'>Creates</SecondName>
          </div>
          <div>
            <AboutMe>Software Engineer</AboutMe>
          </div>
        </FrontPageStyles>
        <SecondGrid>
          <NineSquare />
        </SecondGrid>
      </GridStyles>
    </>
  );
}

export default App;

const FrontPageStyles = styled.div`
  margin-top: 15rem;
  margin-left: 20rem;
`;

const FirstName = styled.span`
  font-size: 128px;
  display: block;
  color: #487e80;
`;

const SecondName = styled.span`
  font-size: 128px;
  display: block;
  background: -webkit-linear-gradient(#e6d2d1, #3e496c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutMe = styled.span`
  font-size: 45px;
  color: #ffffff;
  padding-left: 0.5rem;
  font-family: "Comfortaa", cursive;
`;

const SecondGrid = styled.div`
  margin-top: 15rem;
  padding-top: 2rem;
  padding-left: 8rem;
`;
