import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import "./ProjectPage.scss";

import { Carousel } from "../components/ProjectPage/Carousel";
import { Template } from "./Template/Template";
import { H2 } from "../components/Heading/Heading";
import { badgeIcon } from "../images/icons/badgeIcon";
import { BadgeContainer } from "../components/Badge/BadgeContainer";
import { BottomNavigation } from "../components/ProjectPage/BottomNavigation";

import GridDecor from "../images/decorations/grid.svg";
import VideoDecor from "../images/decorations/video.svg";
import LaptopDecor from "../images/png/laptop.png";

export const ProjectPage = () => {
  const [projectData, setProjectData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setProjectData(null);
    sanityClient
      .fetch(
        `*[_type == "project" && slug.current == $id][0]{
          title,
        slug,
  			carousel[]{asset->{url}},
  			body,
				"tech": *[ _type == "badge" && _id in ^.technologies[]._ref ]{
          // icon{asset->{url}},
          name,
  				label
				},
				link[]
				{
          url,
          "badge": *[ _type == "badge" && _id == ^.badge._ref ][0]{
          // icon{asset->{url}},
          name,
  				label
        },
        },
				"allProjects": *[_type == "project"]|order(id asc){
        	slug,
          title,
          isComingSoon
        },
    }`,
        { id }
      )
      .then((data) => {
        setProjectData(data);
      })
      .catch(console.error);
  }, [id]);

  const getTechArray = () => {
    const techArray = [];
    projectData &&
      projectData.tech.forEach((tech) => {
        let temp = {
          component: badgeIcon[tech.name],
          alt: tech.name,
          label: tech.label,
        };
        techArray.push(temp);
      });
    return techArray;
  };

  const getLinkArray = () => {
    const linkArray = [];
    projectData &&
      projectData.link.forEach((link) => {
        let temp = {
          component: badgeIcon[link.badge.name],
          label: link.badge.label,
          url: link.url,
        };
        linkArray.push(temp);
      });
    return linkArray;
  };

  const getProjectIdx = () => {
    return projectData.allProjects.findIndex((element) => {
      if (element.slug.current === id) {
        return true;
      }
      return false;
    });
  };

  const getPrevProject = () => {
    const currIdx = getProjectIdx();
    const arrLength = projectData.allProjects.length;

    let prevIdx = currIdx;
    do {
      prevIdx = prevIdx - 1 < 0 ? arrLength - 1 : prevIdx - 1;
    } while (projectData.allProjects[prevIdx].isComingSoon);

    return {
      name: projectData.allProjects[prevIdx].title,
      url: `/project/${projectData.allProjects[prevIdx].slug.current}`,
    };
  };

  const getNextProject = () => {
    const currIdx = getProjectIdx();
    const arrLength = projectData.allProjects.length;

    let nextIdx = currIdx;
    do {
      nextIdx = nextIdx + 1 >= arrLength ? 0 : nextIdx + 1;
    } while (projectData.allProjects[nextIdx].isComingSoon);

    return {
      name: projectData.allProjects[nextIdx].title,
      url: `/project/${projectData.allProjects[nextIdx].slug.current}`,
    };
  };

  return (
    <Template>
      <div className="projectPage">
        <div className="projectPage-decorations">
          <img
            src={GridDecor}
            alt="decor"
            className="decorations decorations-back decorations-project-grid"
          />
          <img
            src={VideoDecor}
            alt="decor"
            className="decorations decorations-back decorations-project-video"
          />
          <img
            src={LaptopDecor}
            alt="decor"
            className="decorations decorations-back decorations-project-laptop"
          />
        </div>
        {projectData && (
          <div className="projectPage-content">
            <H2>{projectData.title}</H2>
            <Carousel data={projectData.carousel} />
            <h3 className="projectPage-title">About this Project</h3>
            <BlockContent blocks={projectData.body} />
            <br />
            <BadgeContainer
              title="Technologies"
              width="100%"
              badges={getTechArray()}
            />
            <BottomNavigation
              prevProject={getPrevProject()}
              nextProject={getNextProject()}
              links={getLinkArray()}
            />
          </div>
        )}
      </div>
    </Template>
  );
};
