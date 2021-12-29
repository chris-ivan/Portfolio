import React from "react";
import "./DoubleButton.scss";
import { Button } from "./Button";
import { Init } from "../Animations/Init";

export const DoubleButton = ({ label1, link1, label2, link2 }) => {
  return (
    <Init>
      <div className="double-button">
        <Button label={label1} link={link1} primary />
        <Button label={label2} link={link2} />
      </div>
    </Init>
  );
};
