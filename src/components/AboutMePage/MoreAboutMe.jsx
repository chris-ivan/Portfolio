import React from "react";
import { H2 } from "../Heading/Heading";
import "./MoreAboutMe.scss";
import { BadgeContainer } from "../Badge/BadgeContainer";

import Image from "../../images/decorations/image.svg";
import Grid from "../../images/decorations/grid.svg";

const education = [
  { label: "Bandung Institute of Technology" },
  { label: "FreeCodeCamp" },
  { label: "Ipeka Grand Wisata" },
];

const experiences = [
  { label: "IMT ITB" },
  { label: "Mile Zero Project" },
  { label: "AMI 2021" },
  { label: "Avancer" },
  { label: "IEEE Fusion 2019" },
];

const certificates = [
  { label: "California Institute of Arts UI/UX Specialization" },
  { label: "Harvard CS50x" },
  { label: "AI for Everyone" },
  { label: "Google Technical Support Fundamentals" },
  { label: "Google Fundamentals of Digital Marketing" },
  { label: "Cisco Cybersecurity Essentials" },
];

export const MoreAboutMe = () => {
  return (
    <div className="more-about-container">
      <H2>MoreAboutMe</H2>
      <BadgeContainer title="Education" badges={education} />
      <BadgeContainer title="Experiences" badges={experiences} />
      <BadgeContainer title="Certifications" badges={certificates} />
      <img
        src={Image}
        alt="more-decor"
        className="decorations decorations-back decorations-more-image"
      />
      <img
        src={Grid}
        alt="more-decor"
        className="decorations decorations-back decorations-more-grid"
      />
    </div>
  );
};
