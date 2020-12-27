import React, { useState, useEffect } from "react";
import { Template } from "./Template/Template";
import { Main } from "../components/LandingPage/Main";
import { TechStack } from "../components/LandingPage/TechStack";
import { LatestProjects } from "../components/LandingPage/LatestProjects";
import { Footer } from "../components/LandingPage/Footer";
import { DoubleButton } from "../components/Button/DoubleButton";

import { motion } from "framer-motion";
import { useMotionValue, Scroll } from "framer";

export const LandingPage = () => {
  const y = useMotionValue(0);
  const [isMobile, setisMobile] = useState(false);

  const checkIsMobile = () => {
    let isMobile = window.matchMedia("only screen and (max-width: 760px)")
      .matches;
    const testExp = new RegExp(
      "Android|webOS|iPhone|iPad|" +
        "BlackBerry|Windows Phone|" +
        "Opera Mini|IEMobile|Mobile",
      "i"
    );
    const testMobile = testExp.test(navigator.userAgent);
    isMobile && testMobile ? setisMobile(true) : setisMobile(false);
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
        {/* <Page height="500vh"> */}
        <Template>
          <Main pageY={y} />
          <TechStack pageY={y} />
          <LatestProjects handleResize={setisMobile} />
          <DoubleButton
            label1="All Projects"
            link1="/project"
            label2="Let's Connect"
            link2="/contact"
          />
          <Footer />
        </Template>
        {/* </Page> */}
      </Scroll>
    </motion.div>
  );
};
