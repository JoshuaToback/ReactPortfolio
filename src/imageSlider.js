import { useState } from "react";


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: "100%",
    position: 'relative',
  }
  const slideStyles = {
    width: "100%",
    height: "100%", 
    borderRadius: "10px",
    backgroundPositon: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)', 
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '20px'
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)', 
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '20px'
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>◄</div>
        <div style={rightArrowStyles} onClick={goToNext}>►</div>
        <div style={slideStyles}></div>
     
    </div>
  );
};

export default ImageSlider;
