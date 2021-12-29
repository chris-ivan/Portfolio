import React from "react";
import { H2 } from "../Heading/Heading";
import "./LatestProjects.scss";

import { ProjectPreview } from "./ProjectPreview";
import { Init } from "../Animations/Init";

export const LatestProjects = ({ handleResize, data }) => {
  const findUrl = (link, name) =>
    link.filter((link) => link.badge.name === name)[0].url;
  return (
    <section className="latestProjects-container">
      <Init>
        <H2>LatestProjects</H2>
      </Init>
      {data.map((project) => (
        <Init key={project.slug.current}>
          <ProjectPreview
            src={project.homeBackground.asset.url}
            tinySrc={project.homeLoadingBackground.asset.url}
            title={project.title}
            desc={project.homePagePreviewText}
            tab={project.desktopImage.asset.url}
            phone={project.mobileImage.asset.url}
            webUrl={findUrl(project.link, "SOCIAL_WEB")}
            githubUrl={findUrl(project.link, "SOCIAL_GITHUB")}
            figmaUrl={findUrl(project.link, "TECH_FIGMA")}
            arrowUrl={`/project/${project.slug.current}`}
            handleResize={handleResize}
          />
        </Init>
      ))}
    </section>
  );
};
