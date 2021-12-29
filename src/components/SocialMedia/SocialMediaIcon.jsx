import React from "react";
import {
  SOCIAL_MEDIA_ACTION,
  sendAnalyticsAction,
} from "../../shared/AnalyticActions";
import "./SocialMediaIcon.scss";

export const SocialMediaIcon = ({ url, alt, component: Component, label }) => {
  // const [cursor, setCursor] = React.useState({ x: 0, y: 0 });

  // const handleCursor = (e) => {
  //   setCursor({
  //     x: window.innerWidth - e.clientX,
  //     y: window.innerHeight - e.clientY,
  //   });
  // };

  return (
    <div
      className="social-media-icon-container"
      onClick={() => {
        sendAnalyticsAction(
          SOCIAL_MEDIA_ACTION,
          `Opening social media: ${label}`
        );
      }}
    >
      <a
        href={url}
        className="social-media-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="social-media-icon-move"
          // style={{
          //   transform: `translate(${cursor.x / -20}px, ${cursor.y / -20}px)`,
          // }}
        >
          <Component alt={alt} />
        </div>
      </a>
    </div>
  );
};
