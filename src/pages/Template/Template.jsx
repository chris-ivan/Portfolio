import React from "react";
// import { Navbar } from "../../components/Navbar/Navbar";
// import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import "./Template.scss";
export const Template = ({ children }) => {
  return (
    <>
      {/* <Navbar />
      <SocialMedia /> */}
      <div className="content-container">{children}</div>
    </>
  );
};
