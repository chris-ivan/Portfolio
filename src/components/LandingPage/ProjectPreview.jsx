import React from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import "./ProjectPreview.scss";

import { ReactComponent as Web } from "../../images/icons/Web.svg";
import { ReactComponent as Github } from "../../images/icons/Github.svg";
import { ReactComponent as Figma } from "../../images/icons/Figma.svg";
import { ReactComponent as RightArrow } from "../../images/icons/RightArrow.svg";
import { Init } from "../Animations/Init";
import { motion } from "framer-motion";

export const ProjectPreview = ({
  src,
  tinySrc,
  title,
  desc,
  tab,
  phone,
  webUrl,
  githubUrl,
  figmaUrl,
  arrowUrl,
}) => {
  return (
    <div className="project-preview">
      <div className="project-preview-inner">
        <div className="project-preview-image">
          <Image
            src={src}
            tinySrc={tinySrc}
            className="project-preview-image-bg"
            alt="project-preview"
            progressive
          />
        </div>
        <div className="project-preview-title">
          <Init delay={0.2}>
            <h3>{title}</h3>
          </Init>
        </div>
        <div className="project-preview-content">
          <Init delay={0.4}>
            {desc}
            <div className="project-preview-buttons">
              <Button
                icon={Web}
                label="Web"
                iconPosition="left"
                outLink={webUrl}
                small
              />
              <Button
                icon={Github}
                label="Github"
                iconPosition="left"
                outLink={githubUrl}
                small
              />
              <Button
                icon={Figma}
                label="Figma"
                iconPosition="left"
                outLink={figmaUrl}
                small
              />
              <Button
                icon={RightArrow}
                label="More"
                iconPosition="right"
                link={arrowUrl}
                small
                primary
              />
            </div>
          </Init>
        </div>
      </div>
      <div className="project-preview-screenshoot">
        <Init delay={0.6}>
          <motion.img
            drag
            dragConstraints={{ left: -35, top: -35, right: 35, bottom: 35 }}
            dragElastic={0.7}
            src={phone}
            className="project-preview-screenshoot-phone"
            alt="phone"
          />
        </Init>
        <Init delay={0.8}>
          <motion.img
            drag
            dragConstraints={{ left: -35, top: -35, right: 35, bottom: 35 }}
            dragElastic={0.7}
            src={tab}
            className="project-preview-screenshoot-tab"
            alt="tab"
          />
        </Init>
      </div>
    </div>
  );
};
