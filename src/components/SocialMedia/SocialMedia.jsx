import React from "react";
import "./SocialMedia.scss";

import { ReactComponent as LinkedIn } from "../../images/icons/LinkedIn.svg";
import { ReactComponent as Github } from "../../images/icons/Github.svg";
import { ReactComponent as Instagram } from "../../images/icons/Instagram.svg";
import { ReactComponent as Line } from "../../images/icons/Line.svg";
import { SocialMediaIcon } from "./SocialMediaIcon";

const socialMediaData = [
  {
    label: "Linkedin",
    alt: "Linkedin-logo",
    Icon: LinkedIn,
    url: "https://www.linkedin.com/in/christopher-ivan-gunardi",
  },
  {
    label: "Github",
    alt: "Github-logo",
    Icon: Github,
    url: "https://github.com/Chris-Ivan/",
  },
  {
    label: "Instagram",
    alt: "Instagram-logo",
    Icon: Instagram,
    url: "https://instagram.com/christopher.01__",
  },
  {
    label: "Line",
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
        <SocialMediaIcon
          url={socmed.url}
          key={socmed.alt}
          alt={socmed.alt}
          component={socmed.Icon}
          label={socmed.label}
        />
      ))}
    </div>
  );
};
