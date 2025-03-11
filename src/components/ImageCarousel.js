import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import axios from "axios";
import ImageCard from "./ImageCard"; // Import ImageCard component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

const API_URL = process.env.REACT_APP_API_URL;

const ImageCarousel = ({ onFinish }) => {
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null); // Ref for controlling the slider

  useEffect(() => {
    axios.get(`${API_URL}/api/images`)
      .then((response) => setImages(response.data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false, // Disable default slick arrows
    afterChange: (index) => {
      if (index === images.length - 1) {
        setTimeout(onFinish, 2000);
      }
    },
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <ImageCard image={img} />
          </div>
        ))}
      </Slider>

      {/* Custom Arrow Buttons Below */}
      <div className="arrow-container">
        <button className="custom-arrow custom-prev" onClick={() => sliderRef.current.slickPrev()}>
          ◀
        </button>
        <button className="custom-arrow custom-next" onClick={() => sliderRef.current.slickNext()}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
