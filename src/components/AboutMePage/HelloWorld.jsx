import React from "react";
import { H2 } from "../Heading/Heading";
import "./HelloWorld.scss";

import Photo from "../../images/jpg/secondary-photo.jpg";
import TinyPhoto from "../../images/jpg/secondary-photo-min.jpg";
import { Image } from "../Image/Image";
import ShardDecor from "../../images/decorations/shard.svg";
import { Init } from "../Animations/Init";
import { useTransform, Frame } from "framer";
import { motion } from "framer-motion";

export const HelloWorld = ({ pageY, handleResize }) => {
  const shardY = useTransform(pageY, (value) => value / 1.5);
  return (
    <div className="hello-world">
      <Frame
        background={""}
        width="20%"
        height="20%"
        right="-15%"
        top="-5%"
        y={shardY}
      >
        <img
          src={ShardDecor}
          alt="decor"
          className="decorations decorations-back decorations-hello-shard"
          style={{ width: "60vw", maxWidth: "400px", zIndex: -1 }}
        />
      </Frame>
      <div className="hello-world-desc">
        <Init>
          <H2>HelloWorld</H2>
        </Init>
        <Init delay={0.2}>
          <p>
            My name is Christopher Ivan Gunardi, and I am a Telecommunication
            Engineering student based in West Java, Indonesia. <br />
            <br /> While I am not pursuing a degree in Computer Science or Art,
            I am experienced in{" "}
            <span className="blue-text">
              Frontend Web Development and UI/UX
            </span>{" "}
            and have worked on several projects in these two fields. I enjoy
            creating websites with React and MERN Stack. I am also comfortable
            with using Adobe Photoshop and Figma to create professional UI/UX
            Designs. Oh by the way,{" "}
            <span className="blue-text">the image is draggable :)</span>
          </p>
        </Init>
      </div>
      <div className="hello-world-image">
        <motion.div
          drag={true}
          dragConstraints={{ left: -50, top: -50, right: 50, bottom: 50 }}
          dragElastic={0.5}
          onDrag={() => {
            handleResize(false);
          }}
          onDragEnd={() => {
            setTimeout(() => {
              handleResize(true);
            }, 200);
          }}
        >
          <Init delay={0.4}>
            <Image
              src={Photo}
              tinySrc={TinyPhoto}
              alt="main profile pic"
              rotate
              shadow
              progressive
            />
          </Init>
        </motion.div>
      </div>
    </div>
  );
};
