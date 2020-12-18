import React from "react";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import "./ProjectPreview.scss";

import { ReactComponent as Web } from "../../images/icons/Web.svg";
import { ReactComponent as Github } from "../../images/icons/Github.svg";
import { ReactComponent as Figma } from "../../images/icons/Figma.svg";
import { ReactComponent as RightArrow } from "../../images/icons/RightArrow.svg";

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
      <div className="project-preview-image">
        <Image
          src={src}
          tinySrc={tinySrc}
          className="project-preview-image-bg"
          alt="project-preview"
        />
      </div>
      <div className="project-preview-inner">
        <div className="project-preview-title">
          <h3>{title}</h3>
        </div>
        <div className="project-preview-content">
          {desc}
          <div className="project-preview-buttons">
            <Button
              icon={Web}
              label="Web"
              iconPosition="left"
              link={webUrl}
              small
            />
            <Button
              icon={Github}
              label="Github"
              iconPosition="left"
              link={githubUrl}
              small
            />
            <Button
              icon={Figma}
              label="Figma"
              iconPosition="left"
              link={figmaUrl}
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
        </div>
      </div>
      <div className="project-preview-screenshoot">
        <img src={tab} className="project-preview-screenshoot-tab" alt="tab" />
        <img
          src={phone}
          className="project-preview-screenshoot-phone"
          alt="phone"
        />
      </div>
    </div>
  );
};
