import React from "react";
import { H2 } from "../Heading/Heading";
import "./Favourites.scss";
import { useTransform, Frame } from "framer";

import Laptop from "../../images/png/laptop.png";
import { Init } from "../Animations/Init";

const favourites = [
  {
    left: "Websites",
    right: ["Github", "Freepik", "Stack Overflow", "Medium"],
  },
  {
    left: "Colors",
    right: ["Black", "Blue", "White"],
  },
  {
    left: "Games",
    right: ["none"],
  },
  {
    left: "Emoji",
    right: [":v"],
  },
  {
    left: "Hobbies",
    right: ["Manga", "Badminton", "Watching random videos on YouTube"],
  },
  {
    left: "Music",
    right: ["Aimer", "Yorushika"],
  },
  {
    left: "To Learn List",
    right: ["Django", "SQL", "NextJS"],
  },
  {
    left: "Current Concern",
    right: [`I need more sleep :"`],
  },
];

export const Favourites = ({ pageY }) => {
  const laptopY = useTransform(pageY, (value) => value / 3);
  return (
    <div className="favourites-container">
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
              {favourites.map((fav) => (
                <tr key={fav.left}>
                  <td className="left-table">
                    <p>{fav.left}</p>
                  </td>
                  <td className="right-table">
                    {fav.right.map((ans) => (
                      <p key={ans}>{ans}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Init>
    </div>
  );
};
