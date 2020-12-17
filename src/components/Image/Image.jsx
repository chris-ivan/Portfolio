import React from "react";
import useProgressiveImg from "../../shared/useProgressiveImg";
import "./Image.scss";

export const Image = ({ src, tinySrc, rotate, alt, shadow, progressive }) => {
  const [imageSrc, { blur }] = useProgressiveImg(tinySrc, src);
  return (
    <div className="image-outer-container">
      {shadow && (
        <div className={`image-shadow ${rotate && "image-shadow-rotate"}`} />
      )}
      <div className={`image-container ${rotate && "image-component-rotate"}`}>
        <img
          src={imageSrc}
          className={`image-component ${
            progressive && blur && "image-component-progressive"
          }`}
          alt={alt}
        />
      </div>
    </div>
  );
};
