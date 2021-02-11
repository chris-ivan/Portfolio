import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMotionValue, Scroll } from "framer";

import { Favourites } from "../components/AboutMePage/Favourites";
import { HelloWorld } from "../components/AboutMePage/HelloWorld";
import { MoreAboutMe } from "../components/AboutMePage/MoreAboutMe";
import { DoubleButton } from "../components/Button/DoubleButton";
import { Footer } from "../components/LandingPage/Footer";
import { Template } from "./Template/Template";

import {
  handleDesktopTouch,
  checkIsMobile,
  fetchBadgeContainerData,
} from "../shared/functions";

import { fetchTrivia } from "../shared/API";

export const AboutPage = () => {
  const y = useMotionValue(10);

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

  const [moreAboutMe, setMoreAboutMe] = useState([]);
  const [trivia, setTrivia] = useState([]);
  useEffect(() => {
    const dataToFetch = ["EDUCATION", "EXPERIENCES", "CERTIFICATIONS"];
    fetchBadgeContainerData(dataToFetch, setMoreAboutMe);
    fetchTrivia().then((data) => setTrivia(data));
  }, []);

  const isFetchComplete = () => moreAboutMe.length > 0 && trivia.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onTouchStart={handleDesktopTouch}
    >
      {isFetchComplete && (
        <Scroll
          width="100%"
          height="100%"
          contentOffsetY={y}
          dragEnabled={isMobile}
          onresize={handleResize}
        >
          <Template>
            <HelloWorld pageY={y} handleResize={setisMobile} />
            <DoubleButton
              label1="Let's Connect"
              link1="/contact"
              label2="All Projects"
              link2="/project"
            />
            <MoreAboutMe pageY={y} data={moreAboutMe} />
            <Favourites pageY={y} data={trivia} />
            <Footer />
          </Template>
        </Scroll>
      )}
    </motion.div>
  );
};
