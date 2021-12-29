import React from "react";
import "./Badge.scss";

export const Badge = ({ component: Component, alt, label, src, color }) => {
  return (
    <div className={`badge ${!color && "badge-icon-white"}`}>
      {Component ? <Component alt={alt} /> : src && <img src={src} alt={alt} />}
      <p>{label}</p>
    </div>
  );
};
