import React from "react";
import { Template } from "./Template/Template";
import { Main } from "../components/LandingPage/Main";
import { TechStack } from "../components/LandingPage/TechStack";

export const LandingPage = () => {
  return (
    <Template>
      <Main />
      <TechStack />
    </Template>
  );
};
