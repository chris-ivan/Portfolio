import React from "react";
import { H2 } from "../Heading/Heading";
import "./TechStack.scss";
import { BadgeContainer } from "../Badge/BadgeContainer";

import { ReactComponent as HTML } from "../../images/icons/HTML.svg";
import { ReactComponent as CSS } from "../../images/icons/CSS.svg";
import { ReactComponent as JS } from "../../images/icons/JS.svg";
import { ReactComponent as SCSS } from "../../images/icons/SCSS.svg";
import { ReactComponent as Bootstrap } from "../../images/icons/Bootstrap.svg";
import { ReactComponent as ReactJS } from "../../images/icons/React.svg";

import { ReactComponent as NodeJS } from "../../images/icons/NodeJS.svg";
import { ReactComponent as Express } from "../../images/icons/Express.svg";
import { ReactComponent as Python } from "../../images/icons/Python.svg";
import { ReactComponent as MongoDB } from "../../images/icons/MongoDB.svg";
import { ReactComponent as Git } from "../../images/icons/Git.svg";
import { ReactComponent as Netlify } from "../../images/icons/Netlify.svg";

import { ReactComponent as Photoshop } from "../../images/icons/Photoshop.svg";
import { ReactComponent as Affinity } from "../../images/icons/Affinity.svg";
import { ReactComponent as Figma } from "../../images/icons/Figma.svg";

import Video from "../../images/decorations/video.svg";
import Sphere from "../../images/decorations/sphere.svg";
import Laptop from "../../images/png/laptop.png";

const frontend = [
  {
    component: HTML,
    alt: "html",
    label: "HTML",
  },
  {
    component: CSS,
    alt: "css",
    label: "CSS",
  },
  {
    component: JS,
    alt: "javascript",
    label: "JavaScript",
  },
  {
    component: SCSS,
    alt: "scss",
    label: "SCSS",
  },
  {
    component: Bootstrap,
    alt: "bootstrap",
    label: "Bootstrap",
  },
  {
    component: ReactJS,
    alt: "react",
    label: "ReactJS",
  },
];

const tools = [
  {
    component: NodeJS,
    alt: "node",
    label: "NodeJS",
  },
  {
    component: Express,
    alt: "express",
    label: "Express",
  },
  {
    component: Python,
    alt: "python",
    label: "Python",
  },
  {
    component: MongoDB,
    alt: "mongodb",
    label: "MongoDB",
  },
  {
    component: Git,
    alt: "git",
    label: "Git",
  },
  {
    component: Netlify,
    alt: "netlify",
    label: "Netlify",
  },
];

const design = [
  {
    component: Photoshop,
    alt: "photoshop",
    label: "Adobe Photoshop",
  },
  {
    component: Affinity,
    alt: "affinity",
    label: "Affinity Designer",
  },
  {
    component: Figma,
    alt: "figma",
    label: "Figma",
  },
];

export const TechStack = () => {
  return (
    <div className="techStack-container">
      <H2>MyTechStack</H2>
      <BadgeContainer title="Frontend" badges={frontend} />
      <BadgeContainer title="Tools & Languages" badges={tools} />
      <BadgeContainer title="Design" badges={design} />
      <div className="tech-stack-decoration">
        <img
          src={Sphere}
          alt="sphere"
          className="decorations decorations-back decorations-sphere"
        />
        <img
          src={Video}
          alt="video"
          className="decorations decorations-back decorations-video"
        />
        <img
          src={Laptop}
          alt="laptop"
          className="decorations decorations-back decorations-laptop"
        />
      </div>
    </div>
  );
};
