import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import "./ProjectPreviewPage.scss";
import { ProjectCard } from "../components/ProjectPreviewPage/ProjectCard";
import { Template } from "./Template/Template";

import MZThumb from "../images/jpg/milezero-thumbnail.jpg";
import TinyMZThumb from "../images/jpg/milezero-thumbnail-min.jpg";
import BCAThumb from "../images/jpg/bca-thumbnail.jpg";
import TinyBCAThumb from "../images/jpg/bca-thumbnail-min.jpg";
import AMIThumb from "../images/jpg/ami-thumbnail.jpg";
import TinyAMIThumb from "../images/jpg/ami-thumbnail-min.jpg";
import BibtyThumb from "../images/jpg/bibty-thumbnail.jpg";
import TinyBibtyThumb from "../images/jpg/bibty-thumbnail-min.jpg";
import ChatThumb from "../images/jpg/chatroom-thumbnail.jpg";
import TinyChatThumb from "../images/jpg/chatroom-thumbnail-min.jpg";
import IMThumb from "../images/jpg/insanemath-thumbnail.jpg";
import TinyIMThumb from "../images/jpg/insanemath-thumbnail-min.jpg";
import MineFestThumb from "../images/jpg/minefest-thumbnail.jpg";
import TinyMineFestThumb from "../images/jpg/minefest-thumbnail-min.jpg";

const projectThumbnails = [
  {
    src: MZThumb,
    tinySrc: TinyMZThumb,
    title: "Mile Zero Project",
    tags: ["Frontend", "React"],
  },
  {
    src: BCAThumb,
    tinySrc: TinyBCAThumb,
    title: "BCA Mobile Redesign",
    tags: ["UI/UX", "Mobile", "Figma"],
  },
  {
    src: AMIThumb,
    tinySrc: TinyAMIThumb,
    title: "Aku Masuk ITB 2021",
    tags: ["UI/UX", "Frontend", "React"],
  },
  {
    src: BibtyThumb,
    tinySrc: TinyBibtyThumb,
    title: "Bibty Luxury Renting",
    tags: ["UI/UX", "Mobile", "Figma", "PS"],
  },
  {
    src: ChatThumb,
    tinySrc: TinyChatThumb,
    title: "Private Chatroom",
    tags: ["Fullstack", "React", "Socket.io"],
  },
  {
    src: IMThumb,
    tinySrc: TinyIMThumb,
    title: "Insane Math",
    tags: ["Frontend", "Bootstrap", "Math"],
  },
  {
    src: MineFestThumb,
    tinySrc: TinyMineFestThumb,
    title: "Virtual Mine Tour",
    tags: ["Static Web", "UI/UX", "Bootstrap"],
  },
];

export const ProjectPreviewPage = () => {
  return (
    <Template>
      <div className="projectpreviewpage-container">
        <HorizontalScroll
          reverseScroll={true}
          config={{ stiffness: 60, damping: 10 }}
        >
          {projectThumbnails.map((project) => (
            <ProjectCard
              src={project.src}
              tinySrc={project.tinySrc}
              key={project.title}
              title={project.title}
              tags={project.tags}
            />
          ))}
        </HorizontalScroll>
      </div>
    </Template>
  );
};
