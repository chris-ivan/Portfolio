import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

  const hoverInteraction = { scale: 1.02, transition: { duration: 0.25 } };
  const tapInteraction = { scale: 0.98, transition: { duration: 0.25 } };
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
          <motion.button
            whileHover={hoverInteraction}
            whileTap={tapInteraction}
          >
            {content}
          </motion.button>
        </Link>
      )}
      {outLink && (
        <a href={outLink} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={hoverInteraction}
            whileTap={tapInteraction}
          >
            {content}
          </motion.button>
        </a>
      )}
      {onClick && (
        <motion.button
          whileHover={hoverInteraction}
          whileTap={tapInteraction}
          onClick={onClick}
        >
          <Loading className="loading-animation" />
          {content}
        </motion.button>
      )}
    </div>
  );
};
