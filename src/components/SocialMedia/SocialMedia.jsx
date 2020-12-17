import React from "react";
import "./SocialMedia.scss";

import LinkedIn from "../../images/icons/LinkedIn.svg";
import Github from "../../images/icons/Github.svg";
import Instagram from "../../images/icons/Instagram.svg";
import Line from "../../images/icons/Line.svg";

const socialMediaData = [
  {
    alt: "Linkedin-logo",
    icon: LinkedIn,
  },
  {
    alt: "Github-logo",
    icon: Github,
  },
  {
    alt: "Instagram-logo",
    icon: Instagram,
  },
  {
    alt: "Line-logo",
    icon: Line,
  },
];
export const SocialMedia = () => {
  return (
    <div className="social-media-container">
      {socialMediaData.map((socmed) => (
        <div key={socmed.alt} className="social-media-icon-container">
          <img src={socmed.icon} alt={socmed.alt} />
        </div>
      ))}
    </div>
  );
};
