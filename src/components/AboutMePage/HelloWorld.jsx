import React, { useState, useEffect } from "react";
import { H2 } from "../Heading/Heading";
import "./HelloWorld.scss";
import { toast } from "react-toastify";
import Photo from "../../images/jpg/secondary-photo.jpg";
import TinyPhoto from "../../images/jpg/secondary-photo-min.jpg";
import { Image } from "../Image/Image";
import ShardDecor from "../../images/decorations/shard.svg";
import { Init } from "../Animations/Init";
import { useTransform, Frame } from "framer";
import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import {
  EASTER_EGG_ACTION,
  sendAnalyticsAction,
} from "../../shared/AnalyticActions";

export const HelloWorld = ({ pageY, handleResize }) => {
  const shardY = useTransform(pageY, (value) => value / 1.5);

  const [clickCount, setClickCount] = useState(0);
  const texts = [
    "...Didn't I tell you not to click the button?",
    "Listen here, you little ...",
    ":v",
    "Well",
    "Now that's some serious dedication",
    "This is my last warning",
    "Fine. Enjoy :)",
  ];

  const handleHiddenClick = () => {
    clickCount <= texts.length - 1 && toast.dark(texts[clickCount]);

    if (clickCount === 0) {
      sendAnalyticsAction(
        EASTER_EGG_ACTION,
        "Click the hidden button on page load"
      );
    } else if (clickCount >= texts.length - 1) {
      if (clickCount === texts.length - 1) {
        sendAnalyticsAction(EASTER_EGG_ACTION, "Get Pranked");
        localStorage.setItem("pranked", true);
      }
      toast.dark("Refresh to the rescue");
      setInterval(() => {
        toast.dark("LOL!");
      }, 200);
    }

    setClickCount((prev) => prev + 1);
  };
  useEffect(() => {
    const isPranked = localStorage.getItem("pranked");
    const intervalMessage = (msg, delay) => {
      setTimeout(() => {
        toast.dark(msg);
      }, delay);
    };
    if (isPranked) {
      sendAnalyticsAction(EASTER_EGG_ACTION, "Return after getting pranked");
      localStorage.removeItem("pranked");
      intervalMessage("How was that?", 200);
      intervalMessage("Ehehe :)", 400);
    }
  }, []);

  return (
    <section className="hello-world">
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
        <div className="hello-world-image-hidden-button">
          <Init delay={1}>
            <Button
              label="Don't Click"
              onClick={handleHiddenClick}
              // primary
            />
          </Init>
        </div>
        <motion.div
          drag={true}
          dragConstraints={{ left: -100, top: -100, right: 100, bottom: 100 }}
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
    </section>
  );
};
