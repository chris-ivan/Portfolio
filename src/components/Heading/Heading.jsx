import React from "react";

export const H2 = ({ children }) => {
  return (
    <h2>
      <span className="blue-span">
        <span className="code-heading">{children}</span>
      </span>
    </h2>
  );
};
