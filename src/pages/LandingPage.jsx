import React from "react";
import { Template } from "./Template/Template";
import { Main } from "../components/LandingPage/Main";
import { TechStack } from "../components/LandingPage/TechStack";
import { LatestProjects } from "../components/LandingPage/LatestProjects";
import { Footer } from "../components/LandingPage/Footer";
import { DoubleButton } from "../components/Button/DoubleButton";

export const LandingPage = () => {
  return (
    <Template>
      <Main />
      <TechStack />
      <LatestProjects />
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
