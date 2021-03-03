import React, { useState } from "react";
import { useTransform, Frame } from "framer";
import "./Main.scss";

import { Image } from "../Image/Image";
import Photo from "../../images/jpg/main-photo.jpg";
import TinyPhoto from "../../images/jpg/main-photo-min.jpg";

import ProfileDecor from "../../images/decorations/profile.svg";
import AvatarDecor from "../../images/decorations/avatar.svg";
import LoveDecor from "../../images/decorations/love.svg";
import ShardDecor from "../../images/decorations/shard.svg";
import ImageDecor from "../../images/decorations/image.svg";
import BubbleDecor from "../../images/decorations/bubble.svg";
import ScrollIcon from "../../images/decorations/scroll.svg";
import { Init } from "../Animations/Init";

export const Main = ({ pageY }) => {
  const imageY = useTransform(pageY, (value) => value / -4);
  const shardY = useTransform(pageY, (value) => value / -2);
  const bubbleY = useTransform(pageY, (value) => value / -5);
  const profileY = useTransform(pageY, (value) => value / 6);
  const loveY = useTransform(pageY, (value) => value / 3);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [initialCursor, setInitialCursor] = useState({
    x: 0,
    y: 0,
    acceptCursor: false,
  });

  const handleCursor = (e) => {
    initialCursor.acceptCursor &&
      setCursor({
        x: initialCursor.x - e.clientX,
        y: initialCursor.y - e.clientY,
      });
  };

  const handleCursorEnter = (e) => {
    setInitialCursor({
      x: e.clientX,
      y: e.clientY,
      acceptCursor: true,
    });
  };

  const handleCursorLeave = (e) => {
    setInitialCursor({
      x: e.clientX,
      y: e.clientY,
      acceptCursor: false,
    });
  };

  return (
    <section
      className="main-container"
      onMouseEnter={handleCursorEnter}
      onMouseMove={handleCursor}
      onMouseLeave={handleCursorLeave}
    >
      <div className="landing-page-main-decorations">
        <Frame
          background={""}
          width="20%"
          height="20%"
          right="-5%"
          top="0"
          y={shardY}
        >
          <img
            src={ShardDecor}
            alt=""
            className="decorations decorations-back decorations-shard"
            style={{ width: "30vw", maxWidth: "300px" }}
          />
        </Frame>
        <Frame
          background={""}
          width="100%"
          height="100%"
          left="-5%"
          top="7%"
          y={imageY}
        >
          <img
            src={ImageDecor}
            alt=""
            className="decorations decorations-back decorations-image"
            style={{ height: "20vh", maxHeight: "200px" }}
          />
        </Frame>
        <Frame
          background={""}
          width="100%"
          height="100%"
          left="-1%"
          top="0"
          y={bubbleY}
        >
          <img
            src={BubbleDecor}
            alt=""
            className="decorations decorations-back decorations-bubble"
            style={{ width: "40vw", maxWidth: "120px" }}
          />
        </Frame>
        <img src={ScrollIcon} alt="scroll down" className="scroll-down-icon" />
      </div>
      <div className="landing-main-text">
        <Init>
          <h4>
            Hello! My name is <br />
            <span className="blue-span">Christopher Ivan Gunardi</span>
          </h4>
        </Init>
        <Init delay={0.2}>
          <h1>
            I create modern <br /> website{" "}
            <span className="blue-span">designs</span>
            <br /> and <span className="blue-span">develop</span> it
            <br /> for you
          </h1>
        </Init>
      </div>
      <div className="landing-main-image-container">
        <div
          className="landing-page-image-outer-container"
          style={{
            transform: `translate(${cursor.x / 50}px, ${cursor.y / 50}px)`,
          }}
        >
          <div className="landing-main-image-inner-container">
            <Init delay={0.5}>
              <Image
                src={Photo}
                tinySrc={TinyPhoto}
                alt="Christopher Ivan Gunardi's photo"
                rotate
                shadow
                progressive
              />
            </Init>
          </div>
        </div>
      </div>
      <div className="landing-page-main-decorations">
        <Frame
          background={""}
          width="100%"
          height="100%"
          right="-5%"
          top="-10%"
          y={profileY}
        >
          <img
            src={ProfileDecor}
            alt=""
            className="decorations decorations-semi-front decorations-profile"
            style={{
              height: "20vh",
              maxHeight: "100px",
              transform: `translate(${cursor.x / -35}px, ${cursor.y / -35}px)`,
            }}
          />
        </Frame>
        <img
          src={AvatarDecor}
          alt=""
          className="decorations decorations-front decorations-avatar"
          style={{
            transform: `translate(${cursor.x / 20}px, ${cursor.y / -20}px)`,
          }}
        />
        <Frame
          background={""}
          width="20%"
          height="20%"
          right="5%"
          top="40%"
          y={loveY}
        >
          <img
            src={LoveDecor}
            alt=""
            className="decorations decorations-front decorations-love"
            style={{
              width: "20vw",
              maxWidth: "100px",
              transform: `translate(${cursor.x / 35}px, ${cursor.y / 20}px)`,
            }}
          />
        </Frame>
      </div>
    </section>
  );
};
