import React from "react";
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Scroll width="100%" height="100%" contentOffsetY={y} dragEnabled={false}>
        <Template>
          <HelloWorld pageY={y} />
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
