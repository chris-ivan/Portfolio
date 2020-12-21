import React from "react";
import { Link } from "react-router-dom";
import "./BottomNavigation.scss";
import { Button } from "../Button/Button";

import { ReactComponent as LeftArrow } from "../../images/icons/BlueLeftArrow.svg";
import { ReactComponent as RightArrow } from "../../images/icons/BlueRightArrow.svg";

export const BottomNavigation = ({ prevProject, nextProject, links }) => {
  console.log(links);
  return (
    <div className="bottom-navigation">
      <div className="bottom-navigation-center">
        {links.map((link) => {
          console.log(link);
          return (
            <Button
              icon={link.component}
              label={link.label}
              key={link.label}
              iconPosition="left"
              outLink={link.url}
              small
            />
          );
        })}
      </div>
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
