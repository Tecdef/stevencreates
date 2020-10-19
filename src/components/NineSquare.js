import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Github from "../Assets/Github";
import Javascript from "../Assets/Javscript";
import LinkedIN from "../Assets/LinkedIN";
import Mail from "../Assets/Mail";
import styled from "styled-components";
import Medium from "../Assets/Medium";

export default function NineSquare() {
  return (
    <div>
      <div style={{ display: "block" }}>
        <a target='_none' href='https://github.com/StevenCreates'>
          <TopRowIcons
            whileHover={{ scale: 1.1 }}
            href='https://github.com/StevenCreates'
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}>
            <Github />
          </TopRowIcons>
        </a>
        <TopRowIcons
          style={{ background: "#E6D2D1" }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
        />
        <a target='_none' href='https://www.linkedin.com/in/steven-hofheins/'>
          <TopRowIcons
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}>
            <LinkedIN />
          </TopRowIcons>
        </a>
        <TopRowIcons
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          style={{ background: "#76806A" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
        />
      </div>
      <div style={{ display: "block" }}>
        <BottomRowsIcons
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          style={{ background: "#283845" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
        />
        <a
          target='_none'
          href='https://medium.com/@steven_creates
        '>
          <BottomRowsIcons
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}>
            <Medium />
          </BottomRowsIcons>
        </a>
        <BottomRowsIcons
          initial={{ scale: 0 }}
          style={{ background: "#3E496C" }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
        />
      </div>
      <div style={{ display: "block" }}>
        <AnimatePresence>
          <a href='mailto:steven@stevencreates.tech'>
            <BottomRowsIcons
              initial={{ scale: 1, rotate: 360 }}
              animate={{
                rotate: ["0deg", "6deg", "0deg", "-6deg", "0deg"],
                scale: 1,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                type: "spring",
                delay: 0,
              }}>
              <Mail />
            </BottomRowsIcons>
          </a>
        </AnimatePresence>
        <BottomRowsIcons
          style={{ background: "#487E80" }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            repeate: Infinity,
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}></BottomRowsIcons>
      </div>
    </div>
  );
}

const BottomRowsIcons = styled(motion.div)`
  min-height: 60px;
  max-height: 60px;
  min-width: 60px;
  max-width: 60px;
  display: inline-block;
  background: white;
  border-radius: 5px;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  @media (max-width: 400px) {
    min-height: 45px;
    max-height: 45px;
    min-width: 45px;
    max-width: 45px;
  }
`;

const TopRowIcons = styled(motion.div)`
  min-height: 60px;
  max-height: 60px;
  min-width: 60px;
  max-width: 60px;
  display: inline-block;
  background: white;
  border-radius: 5px;
  margin-right: 1.5rem;
  @media (max-width: 400px) {
    min-height: 45px;
    max-height: 45px;
    min-width: 45px;
    max-width: 45px;
  }
`;
