import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <p>
        This website is created with &lt;3 using{" "}
        <span className="blue-text">React</span> and images from{" "}
        <a href="freepik.com" target="_blank" rel="noopener noreferrer">
          <span className="blue-text">freepik.com</span>
        </a>
      </p>
    </div>
  );
};
