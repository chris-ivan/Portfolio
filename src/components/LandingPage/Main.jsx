import React from "react";
import { motion } from "framer-motion";
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

export const Main = () => {
  return (
    <div className="main-container">
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
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.7}
          className="landing-main-image-inner-container"
        >
          <Init delay={0.5}>
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
      <div className="landing-page-main-decorations">
        <img
          drag
          src={ProfileDecor}
          alt="decor"
          className="decorations decorations-semi-front decorations-profile"
        />
        <img
          src={AvatarDecor}
          alt="decor"
          className="decorations decorations-front decorations-avatar"
        />
        <img
          src={LoveDecor}
          alt="decor"
          className="decorations decorations-front decorations-love"
        />
        <img
          src={ShardDecor}
          alt="decor"
          className="decorations decorations-back decorations-shard"
        />
        <img
          src={ImageDecor}
          alt="decor"
          className="decorations decorations-back decorations-image"
        />
        <img
          src={BubbleDecor}
          alt="decor"
          className="decorations decorations-back decorations-bubble"
        />
        <img src={ScrollIcon} alt="scroll down" className="scroll-down-icon" />
      </div>
    </div>
  );
};
