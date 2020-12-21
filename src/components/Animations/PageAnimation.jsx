import React from "react";
import { motion } from "framer-motion";

export const PageAnimation = ({ children, delay }) => {
  const initVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { ease: "easeInOut" },
    },
    leave: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      className="init-container"
      variants={initVariants}
      initial="hidden"
      animate="visible"
      exit="leave"
    >
      {children}
    </motion.div>
  );
};
