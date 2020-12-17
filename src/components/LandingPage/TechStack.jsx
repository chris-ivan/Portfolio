import React from "react";
import { H2 } from "../Heading/Heading";
import "./TechStack.scss";
import { ReactComponent as HTML } from "../../images/icons/HTML.svg";
import { BadgeContainer } from "../Badge/BadgeContainer";

const frontend = [
  {
    component: HTML,
    alt: "html",
    label: "HTML",
  },
];
export const TechStack = () => {
  return (
    <div className="techStack-container">
      <H2>MyTechStack</H2>
      <BadgeContainer title="Frontend" badges={frontend} />
    </div>
  );
};
