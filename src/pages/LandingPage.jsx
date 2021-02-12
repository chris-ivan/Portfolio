import React, { useState, useEffect } from "react";
import { Template } from "./Template/Template";
import { Main } from "../components/LandingPage/Main";
import { TechStack } from "../components/LandingPage/TechStack";
import { LatestProjects } from "../components/LandingPage/LatestProjects";
import { Footer } from "../components/LandingPage/Footer";
import { DoubleButton } from "../components/Button/DoubleButton";
import { Loading } from "../components/Loading/Loading";

import { motion } from "framer-motion";
import { useMotionValue, Scroll } from "framer";

import {
  handleDesktopTouch,
  checkIsMobile,
  fetchBadgeContainerData,
} from "../shared/functions";

import { fetchHomePageProjects } from "../shared/API";

const LandingPageContent = ({
  y,
  setisMobile,
  techStack,
  homePageProjects,
}) => {
  return (
    <Template>
      <Main pageY={y} />
      <TechStack pageY={y} data={techStack} />
      <LatestProjects handleResize={setisMobile} data={homePageProjects} />
      <DoubleButton
        label1="All Projects"
        link1="/project"
        label2="Let's Connect"
        link2="/contact"
      />
      <Footer />
    </Template>
  );
};

export const LandingPage = () => {
  const y = useMotionValue(0);

  const [isMobile, setisMobile] = useState(checkIsMobile());
  const handleResize = () => {
    setisMobile(checkIsMobile());
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const [techStack, setTechStack] = useState([]);
  const [homePageProjects, setHomePageProjects] = useState([]);
  useEffect(() => {
    const dataToFetch = ["FRONTEND", "TOOLS", "DESIGN"];
    fetchBadgeContainerData(dataToFetch, setTechStack);
    fetchHomePageProjects().then((data) => setHomePageProjects(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {techStack.length > 0 && homePageProjects.length > 0 ? (
        <Scroll
          width="100%"
          height="100%"
          contentOffsetY={y}
          dragEnabled={isMobile}
          onresize={handleResize}
          onTouchStart={handleDesktopTouch}
        >
          <LandingPageContent
            y={y}
            setIsMobile={setisMobile}
            techStack={techStack}
            homePageProjects={homePageProjects}
          />
        </Scroll>
      ) : (
        <Loading />
      )}
    </motion.div>
  );
};
