import React from "react";
import { Favourites } from "../components/AboutMePage/Favourites";
import { HelloWorld } from "../components/AboutMePage/HelloWorld";
import { MoreAboutMe } from "../components/AboutMePage/MoreAboutMe";
import { DoubleButton } from "../components/Button/DoubleButton";
import { Footer } from "../components/LandingPage/Footer";
import { Template } from "./Template/Template";

export const AboutPage = () => {
  return (
    <Template>
      <HelloWorld />
      <DoubleButton
        label1="Let's Connect"
        link1="/contact"
        label2="All Projects"
        link2="/project"
      />
      <MoreAboutMe />
      <Favourites />
      <Footer />
    </Template>
  );
};
