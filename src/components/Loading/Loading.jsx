import React from "react";
import "./Loading.scss";

export const Loading = ({ msg }) => {
  return (
    <div className="loading-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{msg}</p>
    </div>
  );
};
