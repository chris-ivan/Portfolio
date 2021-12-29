import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Ripples from "react-ripples";
import "./Button.scss";

import { ReactComponent as Loading } from "../../images/decorations/loading.svg";

export const Button = ({
  label,
  onClick,
  link,
  outLink,
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
          <Icon alt="" />
        </div>
      )}
      {small ? <p>{label}</p> : <h4>{label}</h4>}
      {iconPosition === "right" && (
        <div className="button-icon">
          <Icon alt="" />
        </div>
      )}
    </div>
  );

  const hoverInteraction = { scale: 1.02, transition: { duration: 0.25 } };
  const tapInteraction = { scale: 0.98, transition: { duration: 0.25 } };
  return (
    <motion.div
      whileHover={hoverInteraction}
      whileTap={tapInteraction}
      className={`button-container ${
        loading && "button-loading"
      } button-container${small ? "-small" : "-large"}${
        primary ? "-primary" : "-secondary"
      }`}
    >
      <Ripples>
        {link && (
          <Link to={link}>
            <button>{content}</button>
          </Link>
        )}
        {outLink && (
          <a href={outLink} target="_blank" rel="noopener noreferrer">
            <button>{content}</button>
          </a>
        )}
        {onClick && (
          <button onClick={onClick}>
            <Loading className="loading-animation" />
            {content}
          </button>
        )}
      </Ripples>
    </motion.div>
  );
};
