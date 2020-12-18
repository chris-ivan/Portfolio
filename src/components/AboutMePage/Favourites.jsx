import React from "react";
import { H2 } from "../Heading/Heading";
import "./Favourites.scss";

import Laptop from "../../images/png/laptop.png";

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

export const Favourites = () => {
  return (
    <div className="favourites-container">
      <H2>Trivia</H2>
      <div className="favourites-table">
        <table>
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
        </table>
      </div>
      <img
        src={Laptop}
        alt="decor-again"
        className="decorations decorations-back decorations-trivia-laptop"
      />
    </div>
  );
};
