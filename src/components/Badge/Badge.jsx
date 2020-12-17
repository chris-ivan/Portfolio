import React from "react";
import "./Badge.scss";

export const Badge = ({ component: Component, alt, label }) => {
  return (
    <div className="badge">
      <Component alt={alt} className="badge-icon" />
      <p>{label}</p>
    </div>
  );
};
