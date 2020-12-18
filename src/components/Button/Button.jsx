import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export const Button = ({
  label,
  onClick,
  link,
  icon: Icon,
  iconPosition,
  primary,
  small,
}) => {
  // iconPosition = "left" or "right"
  const content = (
    <>
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
    </>
  );
  return (
    <div
      className={`button-container button-container${
        small ? "-small" : "-large"
      }${primary ? "-primary" : "-secondary"}`}
    >
      {link && (
        <Link to={link}>
          <button>{content}</button>
        </Link>
      )}
      {onClick && <button onClick={onClick}>{content}</button>}
    </div>
  );
};
