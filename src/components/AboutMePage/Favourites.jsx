import React from "react";
import { H2 } from "../Heading/Heading";
import "./Favourites.scss";
import { useTransform, Frame } from "framer";

import Laptop from "../../images/png/laptop.png";
import { Init } from "../Animations/Init";

export const Favourites = ({ pageY, data }) => {
  const laptopY = useTransform(pageY, (value) => value / 3);
  return (
    <section className="favourites-container">
      <Frame
        background={""}
        width="100%"
        height="100%"
        left="10%"
        top="50vh"
        y={laptopY}
      >
        <img
          src={Laptop}
          alt="decor-again"
          className="decorations decorations-back decorations-trivia-laptop"
          style={{ width: "40vw" }}
        />
      </Frame>
      <Init>
        <H2>Trivia</H2>
      </Init>
      <Init delay={0.2}>
        <div className="favourites-table">
          <table>
            <tbody>
              {data.map((fav) => (
                <tr key={fav.title}>
                  <td className="left-table">
                    <p>{fav.title}</p>
                  </td>
                  <td className="right-table">
                    {fav.content.map((ans) => (
                      <p key={ans}>{ans}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Init>
    </section>
  );
};
