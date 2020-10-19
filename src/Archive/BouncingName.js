import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const BouncingName = ({
  letter,
  size = "24",
  startPoint = 10,
  endPoint = -5,
  color,
  delay = 0,
}) => {
  console.log(color);
  return (
    <AnimatePresence>
      <LetterStyling
        style={{
          fontFamily: "Bungee Shade, cursive",
          color: color,
          fontSize: `${size}px`,
        }}
        drag
        layout
        dragElastic={0.2}
        animate={{
          y: [startPoint, endPoint, startPoint, endPoint, startPoint],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          type: "spring",
          delay: delay,
        }}>
        {letter}
      </LetterStyling>
      ;
    </AnimatePresence>
  );
};

const LetterStyling = styled(motion.div)`
  font-size: 36px;
  display: inline-block;
  padding-right: 0.25rem;
`;

export default BouncingName;
