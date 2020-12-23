import React, { useState, useEffect } from "react";
import { Favourites } from "../components/AboutMePage/Favourites";
import { HelloWorld } from "../components/AboutMePage/HelloWorld";
import { MoreAboutMe } from "../components/AboutMePage/MoreAboutMe";
import { DoubleButton } from "../components/Button/DoubleButton";
import { Footer } from "../components/LandingPage/Footer";
import { Template } from "./Template/Template";
import { motion } from "framer-motion";
import { useMotionValue, Scroll } from "framer";

export const AboutPage = () => {
  const y = useMotionValue(10);

  const [isMobile, setisMobile] = useState(false);

  const checkIsMobile = () => {
    const testExp = new RegExp(
      "Android|webOS|iPhone|iPad|" +
        "BlackBerry|Windows Phone|" +
        "Opera Mini|IEMobile|Mobile",
      "i"
    );
    const testMobile = testExp.test(navigator.userAgent);
    testMobile ? setisMobile(true) : setisMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Scroll
        width="100%"
        height="100%"
        contentOffsetY={y}
        dragEnabled={isMobile}
        onresize={checkIsMobile}
      >
        <Template>
          <HelloWorld pageY={y} handleResize={setisMobile} />
          <DoubleButton
            label1="Let's Connect"
            link1="/contact"
            label2="All Projects"
            link2="/project"
          />
          <MoreAboutMe pageY={y} />
          <Favourites pageY={y} />
          <Footer />
        </Template>
      </Scroll>
    </motion.div>
  );
};
