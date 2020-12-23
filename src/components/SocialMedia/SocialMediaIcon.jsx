import React from "react";
import "./SocialMediaIcon.scss";

export const SocialMediaIcon = ({ url, alt, component: Component }) => {
  // const [cursor, setCursor] = React.useState({ x: 0, y: 0 });

  // const handleCursor = (e) => {
  //   setCursor({
  //     x: window.innerWidth - e.clientX,
  //     y: window.innerHeight - e.clientY,
  //   });
  // };

  return (
    <a
      href={url}
      className="social-media-icon-container"
      target="_blank"
      rel="noopener noreferrer"
      // onMouseMove={handleCursor}
    >
      <div className="social-media-icon">
        <div
          className="social-media-icon-move"
          // style={{
          //   transform: `translate(${cursor.x / -20}px, ${cursor.y / -20}px)`,
          // }}
        >
          <Component alt={alt} />
        </div>
      </div>
    </a>
  );
};
