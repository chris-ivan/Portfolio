import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        This website is created with &lt;3 using{" "}
        <span className="blue-text">React</span> and images from{" "}
        <a
          href="https://www.freepik.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="blue-text">freepik.com</span>
        </a>
      </p>
    </footer>
  );
};
