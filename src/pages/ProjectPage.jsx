import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import "./ProjectPage.scss";

import { Carousel } from "../components/ProjectPage/Carousel";
import { Template } from "./Template/Template";
import { H2 } from "../components/Heading/Heading";

export const ProjectPage = () => {
  const [projectData, setProjectData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project" && slug.current == $id][0]{
          title,
        slug,
  			carousel[]{asset->{url}},
  			body,
				"tech": *[ _type == "badge" && _id in ^.technologies[]._ref ]{
  				icon{asset->{url}},
  				label
				},
				link[]
				{
          url,
          "badge": *[ _type == "badge" && _id == ^.badge._ref ][0]{
          icon{asset->{url}},
  				label
        },
        },
				"allProjects": *[_type == "project"]{
        	 slug
        },
    }`,
        { id }
      )
      .then((data) => {
        setProjectData(data);
        console.log(data);
      })
      .catch(console.error);
  }, [id]);

  return (
    <Template>
      <div className="projectPage">
        {projectData && (
          <div className="projectPage-content">
            <H2>{projectData.title}</H2>
            <Carousel data={projectData.carousel} />
            <h3 className="projectPage-title">About this Project</h3>
            <BlockContent blocks={projectData.body} />
            <h3 className="projectPage-title">Technologies</h3>
          </div>
        )}
      </div>
    </Template>
  );
};
