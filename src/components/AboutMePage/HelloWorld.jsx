import React from "react";
import { H2 } from "../Heading/Heading";
import "./HelloWorld.scss";

import Photo from "../../images/jpg/secondary-photo.jpg";
import TinyPhoto from "../../images/jpg/secondary-photo-min.jpg";
import { Image } from "../Image/Image";
import ShardDecor from "../../images/decorations/shard.svg";
import { Init } from "../Animations/Init";

export const HelloWorld = () => {
  return (
    <div className="hello-world">
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
            Designs.
          </p>
        </Init>
      </div>
      <div className="hello-world-image">
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
      </div>
      <img
        src={ShardDecor}
        alt="decor"
        className="decorations decorations-back decorations-hello-shard"
      />
    </div>
  );
};
