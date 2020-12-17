import React from "react";
import { Image } from "../Image/Image";
import "./ProjectPreview.scss";

export const ProjectPreview = ({ src, tinySrc, title, desc, tab, phone }) => {
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
        <div className="project-preview-content">{desc}</div>
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
