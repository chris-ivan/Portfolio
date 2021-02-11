import React from "react";
import { H2 } from "../Heading/Heading";
import "./TechStack.scss";
import { BadgeContainer } from "../Badge/BadgeContainer";
import { useTransform, Frame } from "framer";

import Video from "../../images/decorations/video.svg";
import Sphere from "../../images/decorations/sphere.svg";
import Laptop from "../../images/png/laptop.png";
import { Init } from "../Animations/Init";

import { setBadgeContainerArray } from "../../shared/functions";

const Decorations = ({ pageY }) => {
  const sphereY = useTransform(pageY, (value) => value / 1.5);
  const videoY = useTransform(pageY, (value) => value / 5);
  const laptopY = useTransform(pageY, (value) => value / 2.5);

  return (
    <div className="tech-stack-decoration">
      <Frame
        background={""}
        width="20%"
        height="20%"
        left="-5%"
        top="60vh"
        y={sphereY}
      >
        <img
          src={Sphere}
          alt="sphere"
          className="decorations decorations-back decorations-sphere"
          style={{ width: "30vw", maxWidth: "200px" }}
        />
      </Frame>
      <Frame
        background={""}
        width="20%"
        height="20%"
        left="-5%"
        top="60vh"
        y={videoY}
      >
        <img
          src={Video}
          alt="video"
          style={{ width: "40vw", maxWidth: "300px" }}
          className="decorations decorations-back decorations-video"
        />
      </Frame>
      <Frame
        background={""}
        width="20%"
        height="20%"
        right="-15%"
        top="75vh"
        y={laptopY}
      >
        <img
          src={Laptop}
          alt="laptop"
          style={{ width: "60vw", maxWidth: "400px" }}
          className="decorations decorations-back decorations-laptop"
        />
      </Frame>
    </div>
  );
};

export const TechStack = ({ pageY, data: fetchedData }) => {
  return (
    <section className="techStack-container">
      <Decorations pageY={pageY} />
      <Init>
        <H2>MyTechStack</H2>
      </Init>
      {fetchedData.length > 0 &&
        fetchedData.map((data, idx) => (
          <Init key={idx} delay={0.2 * (idx + 1)}>
            <BadgeContainer
              title={data.title}
              badges={setBadgeContainerArray(data.data)}
            />
          </Init>
        ))}
    </section>
  );
};
