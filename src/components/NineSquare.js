import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Github from "../Assets/Github";
import Javascript from "../Assets/Javscript";
import LinkedIN from "../Assets/LinkedIN";
import Mail from "../Assets/Mail";

export default function NineSquare() {
  return (
    <div>
      <div style={{ display: "block" }}>
        <a href='https://github.com/StevenCreates'>
          <motion.div
            type='button'
            href='https://github.com/StevenCreates'
            style={{
              height: 60,
              width: 60,
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
              damping: 25,
            }}>
            <Github />
          </motion.div>
        </a>
        <motion.div
          style={{
            height: 60,
            width: 60,
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
            damping: 25,
          }}
        />
        <motion.div
          style={{
            height: 60,
            width: 60,
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
            damping: 25,
          }}>
          <LinkedIN />
        </motion.div>
        <motion.div
          style={{
            height: 60,
            width: 60,
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
            damping: 25,
          }}
        />
      </div>
      <div style={{ display: "block" }}>
        <motion.div
          style={{
            height: 60,
            width: 60,
            borderRadius: 5,
            background: "white",
            display: "inline-block",
            marginRight: "1.5rem",
            marginTop: "1.5rem",
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
        />
        <motion.div
          style={{
            height: 60,
            width: 60,
            borderRadius: 5,
            background: "white",
            display: "inline-block",
            marginRight: "1.5rem",
            marginTop: "1.5rem",
          }}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}>
          <Javascript />
        </motion.div>
        <motion.div
          style={{
            height: 60,
            width: 60,
            borderRadius: 5,
            background: "white",
            display: "inline-block",
            marginRight: "1.5rem",
            marginTop: "1.5rem",
          }}
          initial={{ scale: 0 }}
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
          <motion.div
            style={{
              height: 60,
              width: 60,
              borderRadius: 5,
              background: "white",
              display: "inline-block",
              marginRight: "1.5rem",
              marginTop: "1.5rem",
            }}
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
          </motion.div>
        </AnimatePresence>
        <motion.div
          style={{
            height: 60,
            width: 60,
            borderRadius: 5,
            background: "white",
            display: "inline-block",
            marginRight: "1.5rem",
            marginTop: "1.5rem",
          }}
          // initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            repeate: Infinity,
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
        />
      </div>
    </div>
  );
}
