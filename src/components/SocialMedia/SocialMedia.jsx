import React from "react";
import "./SocialMedia.scss";

// import LinkedIn from "../../images/icons/LinkedIn.svg";
// import Github from "../../images/icons/Github.svg";
// import Instagram from "../../images/icons/Instagram.svg";
// import Line from "../../images/icons/Line.svg";

import { ReactComponent as LinkedIn } from "../../images/icons/LinkedIn.svg";
import { ReactComponent as Github } from "../../images/icons/Github.svg";
import { ReactComponent as Instagram } from "../../images/icons/Instagram.svg";
import { ReactComponent as Line } from "../../images/icons/Line.svg";

const socialMediaData = [
  {
    alt: "Linkedin-logo",
    Icon: LinkedIn,
  },
  {
    alt: "Github-logo",
    Icon: Github,
  },
  {
    alt: "Instagram-logo",
    Icon: Instagram,
  },
  {
    alt: "Line-logo",
    Icon: Line,
  },
];
export const SocialMedia = () => {
  return (
    <div className="social-media-container">
      {socialMediaData.map((socmed) => (
        <div key={socmed.alt} className="social-media-icon-container">
          {/* <img src={socmed.icon} alt={socmed.alt} /> */}
          <socmed.Icon alt={socmed.alt} />
        </div>
      ))}
    </div>
  );
};
