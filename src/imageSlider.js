import React from "react";
import { useState } from "react";

const ImageSlider = ({ slides, descriptions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPositon: "center",
    backgroundSize: "cover",
    backgroundImage: slides[currentSlide],
    marginBottom: "10px"
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "20px",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "20px",
  };

  const descStyles = {
    display: "flex",
    fontSize: "25px",
    textAlign: "left"
  }

  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide + slides.length - 1) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div style={sliderStyles} className="imageSlider">
      <button style={leftArrowStyles} onClick={goToPreviousSlide}>
      ◄
      </button>
      <div style={descStyles}>{descriptions[currentSlide]} </div>
      <img style={slideStyles} src={slides[currentSlide]} alt="slide" />
      <button style={rightArrowStyles} onClick={goToNextSlide}>
      ►
      </button>
    </div>
  );
};

export default ImageSlider;
