import React from "react";
import { motion } from "framer-motion";

export const Init = ({ children, delay }) => {
  return (
    <motion.div
      className="init-container"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2 + delay,
        duration: 500,
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
};
