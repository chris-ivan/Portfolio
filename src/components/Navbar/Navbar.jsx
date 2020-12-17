import React from "react";
import { routes } from "../../routes/routes";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        {routes.map(
          (route) =>
            route.label && (
              <NavLink
                exact={route.path === "/"}
                disabled
                // className="navbar-link"
                // activeClassName="navbar-link-active"
                key={route.path}
                to={route.path}
              >
                <h5>{route.label}</h5>
              </NavLink>
            )
        )}
      </div>
    </div>
  );
};
