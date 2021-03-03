import React from "react";
import { H2 } from "../Heading/Heading";
import "./MoreAboutMe.scss";
import { BadgeContainer } from "../Badge/BadgeContainer";
import { useTransform, Frame } from "framer";

import Image from "../../images/decorations/image.svg";
import Grid from "../../images/decorations/grid.svg";
import { Init } from "../Animations/Init";

import { setBadgeContainerArray } from "../../shared/functions";

const Decoration = ({ pageY }) => {
  const imageY = useTransform(pageY, (value) => value / 3);
  const gridY = useTransform(pageY, (value) => value / -5);
  return (
    <>
      <Frame
        background={""}
        width="20%"
        height="20%"
        left="-5%"
        top="100%"
        y={imageY}
      >
        <img
          src={Image}
          alt=""
          className="decorations decorations-back decorations-more-image"
          style={{ width: "30vw", maxWidth: "300px" }}
        />
      </Frame>
      <Frame
        background={""}
        width="100%"
        height="100%"
        right="-40%"
        top="-10%"
        y={gridY}
      >
        <img
          src={Grid}
          alt=""
          className="decorations decorations-back decorations-more-grid"
          style={{ width: "70vw", maxWidth: "none" }}
        />
      </Frame>
    </>
  );
};

export const MoreAboutMe = ({ pageY, data: fetchedData }) => {
  return (
    <section className="more-about-container">
      <Decoration pageY={pageY} />
      <Init>
        <H2>MoreAboutMe</H2>
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
