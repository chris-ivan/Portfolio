import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

import { ReactComponent as Loading } from "../../images/decorations/loading.svg";

export const Button = ({
  label,
  onClick,
  link,
  icon: Icon,
  iconPosition,
  primary,
  small,
  loading,
}) => {
  // iconPosition = "left" or "right"
  const content = (
    <div className="button-content">
      {iconPosition === "left" && (
        <div className="button-icon">
          <Icon alt="button-icon" />
        </div>
      )}
      {small ? <p>{label}</p> : <h4>{label}</h4>}
      {iconPosition === "right" && (
        <div className="button-icon">
          <Icon alt="button-icon" />
        </div>
      )}
    </div>
  );
  return (
    <div
      className={`button-container ${
        loading && "button-loading"
      } button-container${small ? "-small" : "-large"}${
        primary ? "-primary" : "-secondary"
      }`}
    >
      {link && (
        <Link to={link}>
          <button>{content}</button>
        </Link>
      )}
      {onClick && (
        <button onClick={onClick}>
          <Loading className="loading-animation" />
          {content}
        </button>
      )}
    </div>
  );
};
