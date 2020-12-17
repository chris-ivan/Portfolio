import React from "react";
import { Image } from "../Image/Image";
import "./Main.scss";
import Photo from "../../images/jpg/main-photo.jpg";
import TinyPhoto from "../../images/jpg/main-photo-min.jpg";

import ProfileDecor from "../../images/decorations/profile.svg";
import AvatarDecor from "../../images/decorations/avatar.svg";
import LoveDecor from "../../images/decorations/love.svg";
import ShardDecor from "../../images/decorations/shard.svg";
import ImageDecor from "../../images/decorations/image.svg";
import BubbleDecor from "../../images/decorations/bubble.svg";
import ScrollIcon from "../../images/decorations/scroll.svg";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="landing-main-text">
        <h4>
          Hello! My name is <br />
          <span className="blue-span">Christopher Ivan Gunardi</span>
        </h4>
        <h1>
          I create modern <br /> website{" "}
          <span className="blue-span">designs</span>
          <br /> and <span className="blue-span">develop</span> it
          <br /> for you
        </h1>
      </div>
      <div className="landing-main-image-container">
        <Image
          src={Photo}
          tinySrc={TinyPhoto}
          alt="main profile pic"
          rotate
          shadow
          progressive
        />
      </div>
      <div className="landing-page-main-decorations">
        <img
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
