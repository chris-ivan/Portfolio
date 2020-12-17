import React from "react";
import { Template } from "./Template/Template";
import { Main } from "../components/LandingPage/Main";
import { TechStack } from "../components/LandingPage/TechStack";
import { LatestProjects } from "../components/LandingPage/LatestProjects";
import { Footer } from "../components/LandingPage/Footer";

export const LandingPage = () => {
  return (
    <Template>
      <Main />
      <TechStack />
      <LatestProjects />
      <Footer />
    </Template>
  );
};
