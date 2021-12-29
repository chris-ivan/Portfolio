import React from "react";
import { H2 } from "../components/Heading/Heading";
import { Template } from "./Template/Template";
import "./404.scss";
import { DoubleButton } from "../components/Button/DoubleButton";

export const Page404 = () => {
  const bgObjectCount = 50;
  let arr = [];
  for (let i = 0; i < bgObjectCount; i++) {
    arr.push(i);
  }
  return (
    <Template>
      <div className="page404-container">
        <div className="page404-bg">
          {arr.map((item) => (
            <div key={item} className="circle-container">
              <div className="circle"></div>
            </div>
          ))}
        </div>
        <div className="page404-content">
          <H2>Oops,404</H2>
          <p>
            Sorry, but this is not the page you are looking for. Maybe you can
            find them in these pages. Have fun!
          </p>
          <DoubleButton
            label1="Home"
            link1="/"
            label2="Projects"
            link2="/project"
          />
        </div>
      </div>
    </Template>
  );
};
