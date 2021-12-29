import React from "react";
import { Badge } from "./Badge";
import "./BadgeContainer.scss";

export const BadgeContainer = ({ title, badges, width }) => {
  return (
    <div className="badge-container" style={width && { width: width }}>
      <h4>{title}</h4>
      <div className="badge-container-inner">
        {badges.map((badge) => (
          <Badge
            component={badge.component}
            alt={badge.alt}
            label={badge.label}
            key={badge.label}
            src={badge.src}
          />
        ))}
      </div>
    </div>
  );
};
