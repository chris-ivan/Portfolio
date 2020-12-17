import React from "react";
import { Badge } from "./Badge";
import "./BadgeContainer.scss";

export const BadgeContainer = ({ title, badges }) => {
  return (
    <div className="badge-container">
      <h4>{title}</h4>
      {badges.map((badge) => (
        <Badge
          component={badge.component}
          alt={badge.alt}
          label={badge.label}
          key={badge.label}
        />
      ))}
    </div>
  );
};
