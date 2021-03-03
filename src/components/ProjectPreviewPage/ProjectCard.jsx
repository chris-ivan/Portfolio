import React from "react";
import { useHistory } from "react-router-dom";
import { Image } from "../Image/Image";
import "./ProjectCard.scss";
import { Badge } from "../Badge/Badge";
import { ReactComponent as OnGoingIcon } from "../../images/icons/ongoing.svg";

export const ProjectCard = ({
  src,
  tinySrc,
  title,
  tags,
  isComingSoon,
  isOngoing,
  slug,
}) => {
  const history = useHistory();
  const handleRedirect = () => {
    !isComingSoon && history.push(`/project/${slug}`);
  };

  return (
    <div className="projectCard" onClick={handleRedirect}>
      {isOngoing && !isComingSoon && (
        <div className="ongoing-container">
          <Badge
            component={OnGoingIcon}
            alt={`${title} is an ongoing project`}
            label="Ongoing"
            color="#27C93F"
          />
        </div>
      )}
      <div className="projectCard-image">
        {isComingSoon && (
          <div className="coming-soon-container">COMING SOON</div>
        )}
        <Image
          src={src}
          tinySrc={tinySrc}
          alt={`a thumbnail for ${title}`}
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
