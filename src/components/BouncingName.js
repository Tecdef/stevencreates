import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const BouncingName = ({
  letter,
  size = "24",
  startPoint = 10,
  endPoint = -5,
  color,
}) => {
  console.log(color);
  return (
    <AnimatePresence>
      <LetterStyling
        style={{
          color: color,
          fontSize: `${size}px`,
        }}
        drag
        animate={{
          y: [startPoint, endPoint, startPoint, endPoint, startPoint],
        }}
        transition={{ repeat: Infinity, duration: 6, type: "spring" }}>
        {letter}
      </LetterStyling>
      ;
    </AnimatePresence>
  );
};

const LetterStyling = styled(motion.div)`
  font-size: 36px;
  padding: 1rem;
  display: inline-block;
`;

export default BouncingName;
