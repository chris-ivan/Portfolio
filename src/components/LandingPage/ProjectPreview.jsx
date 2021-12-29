import React from "react";
import { motion } from "framer-motion";
import BlockContent from "@sanity/block-content-to-react";
import {
  EASTER_EGG_ACTION,
  sendAnalyticsAction,
} from "../../shared/AnalyticActions";
import "./ProjectPreview.scss";

import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import { Init } from "../Animations/Init";

import { ReactComponent as Web } from "../../images/icons/Web.svg";
import { ReactComponent as Github } from "../../images/icons/Github.svg";
import { ReactComponent as Figma } from "../../images/icons/Figma.svg";
import { ReactComponent as RightArrow } from "../../images/icons/RightArrow.svg";

export const ProjectPreview = ({
  src,
  tinySrc,
  title,
  desc,
  tab,
  phone,
  webUrl,
  githubUrl,
  figmaUrl,
  arrowUrl,
  handleResize,
}) => {
  return (
    <section className="project-preview">
      <div className="project-preview-inner">
        <div className="project-preview-screenshoot">
          <Init delay={0.6}>
            <motion.img
              drag
              dragConstraints={{ left: -35, top: -35, right: 35, bottom: 35 }}
              dragElastic={0.7}
              src={phone}
              className="project-preview-screenshoot-phone"
              alt={`mobile screenshoot of ${title} website`}
              onDrag={() => {
                handleResize(false);
              }}
              onDragEnd={() => {
                sendAnalyticsAction(
                  EASTER_EGG_ACTION,
                  "Dragging mobile screenshoot"
                );
                setTimeout(() => {
                  handleResize(true);
                }, 200);
              }}
            />
            <motion.img
              drag
              dragConstraints={{ left: -35, top: -35, right: 35, bottom: 35 }}
              dragElastic={0.7}
              src={tab}
              className="project-preview-screenshoot-tab"
              alt={`desktop screenshoot of ${title} website`}
              onDrag={() => {
                handleResize(false);
              }}
              onDragEnd={() => {
                sendAnalyticsAction(
                  EASTER_EGG_ACTION,
                  "Dragging desktop screenshoot"
                );
                setTimeout(() => {
                  handleResize(true);
                }, 200);
              }}
            />
          </Init>
        </div>
        <div className="project-preview-image">
          <Image
            src={src}
            tinySrc={tinySrc}
            className="project-preview-image-bg"
            alt={`image preview of ${title} website`}
            progressive
          />
        </div>
        <div className="project-preview-title">
          <Init delay={0.2}>
            <h3>{title}</h3>
          </Init>
        </div>
        <div className="project-preview-content">
          <Init delay={0.4}>
            <BlockContent blocks={desc} />
            <div className="project-preview-buttons">
              <Button
                icon={Web}
                label="Web"
                iconPosition="left"
                outLink={webUrl}
                small
              />
              <Button
                icon={Github}
                label="Github"
                iconPosition="left"
                outLink={githubUrl}
                small
              />
              <Button
                icon={Figma}
                label="Figma"
                iconPosition="left"
                outLink={figmaUrl}
                small
              />
              <Button
                icon={RightArrow}
                label="More"
                iconPosition="right"
                link={arrowUrl}
                small
                primary
              />
            </div>
          </Init>
        </div>
      </div>
    </section>
  );
};
