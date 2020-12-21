import React from "react";
import { Link } from "react-router-dom";
import "./SocialMedia.scss";

import { ReactComponent as LinkedIn } from "../../images/icons/LinkedIn.svg";
import { ReactComponent as Github } from "../../images/icons/Github.svg";
import { ReactComponent as Instagram } from "../../images/icons/Instagram.svg";
import { ReactComponent as Line } from "../../images/icons/Line.svg";

const socialMediaData = [
  {
    alt: "Linkedin-logo",
    Icon: LinkedIn,
    url: "https://www.linkedin.com/in/christopher-ivan-gunardi",
  },
  {
    alt: "Github-logo",
    Icon: Github,
    url: "https://github.com/Chris-Ivan/",
  },
  {
    alt: "Instagram-logo",
    Icon: Instagram,
    url: "https://instagram.com/christopher.01__",
  },
  {
    alt: "Line-logo",
    Icon: Line,
    url:
      "https://timeline.line.me/user/_dfJ0BxfPlCiYEE7FlI4oE9-Sy0MJxehOj7lBsY0",
  },
];
export const SocialMedia = () => {
  return (
    <div className="social-media-container">
      {socialMediaData.map((socmed) => (
        <a
          href={socmed.url}
          key={socmed.alt}
          className="social-media-icon-container"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={socmed.icon} alt={socmed.alt} /> */}
          <socmed.Icon alt={socmed.alt} />
        </a>
      ))}
    </div>
  );
};
