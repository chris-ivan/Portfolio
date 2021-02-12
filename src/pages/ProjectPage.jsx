import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
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
import { Init } from "../components/Animations/Init";

import { fetchProject } from "../shared/API";
import { Loading } from "../components/Loading/Loading";

export const ProjectPage = () => {
  const [projectData, setProjectData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setProjectData(null);
    fetchProject(id)
      .then((data) => {
        setProjectData(data);
      })
      .catch((err) => {
        console.log(err);
        toast.dark(
          "Unfortunately, I can't afford regular CMS pricing, so we'll have to wait a month until the monthly CMS usage is restart :( "
        );
      });
  }, [id]);

  const getTechArray = () => {
    const techArray = [];
    projectData &&
      projectData.tech.forEach((tech) => {
        let temp = {
          // component: badgeIcon[tech.name],
          src: tech.icon.asset.url,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
          {projectData ? (
            <Init>
              <article className="projectPage-content">
                <Init>
                  <H2>{projectData.title}</H2>
                </Init>
                <Carousel data={projectData.carousel} />
                <Init delay={0.2}>
                  <h3 className="projectPage-title">About this Project</h3>
                  <BlockContent blocks={projectData.body} />
                  <br className="Br" />
                </Init>
                <Init delay={0.4}>
                  <BadgeContainer
                    title="Technologies"
                    width="100%"
                    badges={getTechArray()}
                  />
                </Init>
                <BottomNavigation
                  prevProject={getPrevProject()}
                  nextProject={getNextProject()}
                  links={getLinkArray()}
                />
              </article>
            </Init>
          ) : (
            <Loading />
          )}
        </div>
      </Template>
    </motion.div>
  );
};
