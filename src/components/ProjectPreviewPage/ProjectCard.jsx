import React from "react";
import { Image } from "../Image/Image";
import "./ProjectCard.scss";

export const ProjectCard = ({ src, tinySrc, title, tags }) => {
  return (
    <div className="projectCard">
      <div className="projectCard-image">
        <Image
          src={src}
          tinySrc={tinySrc}
          alt="project-thumbnail"
          progressive
        />
      </div>
      <div className="projectCard-info">
        <p>{title}</p>
        <div className="projectCard-info-tags">
          {tags.map((tag) => (
            <h5 key={tag}>{tag}</h5>
          ))}
        </div>
      </div>
    </div>
  );
};
