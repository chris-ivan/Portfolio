import React from "react";
import "./Carousel.scss";
import Slider from "infinite-react-carousel";

export const Carousel = ({ data }) => (
  <Slider className="carousel" dots autoplay>
    {data.map((image) => (
      <div className="carousel-content" key={image.asset.url}>
        <img
          src={image.asset.url}
          alt={image.asset.url}
          className="carousel-image"
          // style={{ backgroundImage: image.css }}
        />
      </div>
    ))}
  </Slider>
);
