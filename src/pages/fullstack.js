import React from "react";
import ImageSlider from "../imageSlider";

export default function fullStack() {
  const slides = [
    { url: "http://localhost:3000/F1.png", title: "FullstacksHome" },
    { url: "http://localhost:3000/F2.png", title: "FullstacksMenu" },
    { url: "http://localhost:3000/F3.png", title: "FullstacksCheckOut" },
  ];
  const containerStyles = {
    width: '800px',
    height: '400px', 
    margin: '0 auto',
  };
  return (
    <>
      <h1>Full Stack</h1>
      <div className="container">
        <h2>Fullstacks Cafe</h2>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    </>
  );
}
