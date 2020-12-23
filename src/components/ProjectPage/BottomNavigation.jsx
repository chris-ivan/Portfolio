import React from "react";
import { Link } from "react-router-dom";
import "./BottomNavigation.scss";
import { Button } from "../Button/Button";

import { ReactComponent as LeftArrow } from "../../images/icons/BlueLeftArrow.svg";
import { ReactComponent as RightArrow } from "../../images/icons/BlueRightArrow.svg";
import { Init } from "../Animations/Init";

export const BottomNavigation = ({ prevProject, nextProject, links }) => {
  return (
    <div className="bottom-navigation">
      <Init>
        <div className="bottom-navigation-center">
          {links.map((link) => (
            <Button
              icon={link.component}
              label={link.label}
              key={link.label}
              iconPosition="left"
              outLink={link.url}
              small
            />
          ))}
        </div>
      </Init>
      <div className="bottom-navigation-side">
        <Link className="bottom-navigation-left" to={prevProject.url}>
          <div className="bottom-navigation-left-top">
            <LeftArrow />
            <p>Prev</p>
          </div>
          <h5>{prevProject.name}</h5>
        </Link>
        <Link className="bottom-navigation-right" to={nextProject.url}>
          <div className="bottom-navigation-right-top">
            <p>Next</p>
            <RightArrow />
          </div>
          <h5>{nextProject.name}</h5>
        </Link>
      </div>
    </div>
  );
};
