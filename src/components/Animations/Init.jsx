import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Init = ({ children, delay = 0, disabledView }) => {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05 });
  useEffect(() => {
    inView ? animation.start("visible") : animation.start("hidden");
  }, [animation, inView]);
  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + delay,
        duration: 500,
        type: "spring",
        stiffness: 100,
        staggerChildren: 0.5,
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="init-container"
      ref={ref}
      animate={disabledView ? "visible" : animation}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
