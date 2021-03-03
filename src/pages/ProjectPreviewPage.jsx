import React, { useEffect, useState } from "react";
import HorizontalScroll from "../shared/ScrollHorizontal";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
// import sanityClient from "../client";

import "./ProjectPreviewPage.scss";
import { ProjectCard } from "../components/ProjectPreviewPage/ProjectCard";
import { Template } from "./Template/Template";
import { Init } from "../components/Animations/Init";

import GridDecor from "../images/decorations/grid.svg";
import VideoDecor from "../images/decorations/video.svg";
import LaptopDecor from "../images/png/laptop.png";

import { fetchAllProjects } from "../shared/API";

export const ProjectPreviewPage = () => {
  const [allProjects, setAllProjects] = useState(null);
  useEffect(() => {
    fetchAllProjects()
      .then((data) => {
        setAllProjects(data);
      })
      .catch((err) => {
        console.log(err);
        toast.dark(
          "Unfortunately, I can't afford regular CMS pricing, so we'll have to wait a month until the monthly CMS usage is restart :( "
        );
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Template>
        <div className="projectpreviewpage-decorations">
          <img
            src={GridDecor}
            alt=""
            className="decorations decorations-back decorations-project-grid"
          />
          <img
            src={VideoDecor}
            alt=""
            className="decorations decorations-back decorations-project-video"
          />
          <img
            src={LaptopDecor}
            alt=""
            className="decorations decorations-back decorations-project-laptop"
          />
        </div>
        <div className="projectpreviewpage-container">
          {allProjects && (
            <HorizontalScroll
              reverseScroll={true}
              config={{ stiffness: 60, damping: 10 }}
              style={{ height: "calc(100vh - 140px)" }}
            >
              {allProjects.map((project, idx) => (
                <Init delay={idx * 0.2} key={idx} disabledView>
                  <ProjectCard
                    className="horizontal-scroll"
                    src={project.previewImage.asset.url}
                    tinySrc={project.loadingImage.asset.url}
                    key={project.title}
                    title={project.title}
                    tags={project.tags}
                    isComingSoon={project.isComingSoon}
                    isOngoing={project.isOngoing}
                    slug={project.slug.current}
                  />
                </Init>
              ))}
            </HorizontalScroll>
          )}
        </div>
      </Template>
    </motion.div>
  );
};
