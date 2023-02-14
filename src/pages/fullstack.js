import React from "react";
// import { useState } from "react";
import html5 from "../images/programs/HTML5.png";
import css3 from "../images/programs/css3.png";
import js from "../images/programs/javascript.png";
import mysql from "../images/programs/mysql.png";
import boot from "../images/programs/bootstrap-4-logo.png";
import node from "../images/programs/nodejs.png";
import ImageSlider from "../imageSlider";

export default function fullStack() {
    // const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    { url: "http://localhost:3000/F1.png", title: "FullstacksHome" },
    { url: "http://localhost:3000/F2.png", title: "FullstacksMenu" },
    { url: "http://localhost:3000/F3.png", title: "FullstacksCheckOut" },
    { url: "http://localhost:3000/F4.png", title: "FullstacksConfirm" },
    { url: "http://localhost:3000/F5.png", title: "FullstacksLS" },
    { url: "http://localhost:3000/F6.png", title: "FullstacksDB" },
  ];

//   const descriptions = [
//     {
//         text: "Test"
//     }
// ];

  const containerStyles = {
    width: "1000px",
    height: "500px",
    margin: "0 auto",
  };
  return (
    <>
      <div className="pageTitle">
        <h1>Full Stack</h1>
      </div>
      <div className="FScontainer">
        <h2>Fullstacks Cafe</h2>
        <div style={containerStyles}>
            {/* <ImageDescription descriptions={descriptions} currentIndex={currentIndex} /> */}
          <ImageSlider slides={slides} />
          {/* setCurrentIndex={setCurrentIndex} */}
        </div>
        <p className="fsInfo">
          A full stack, MVC dual application that allows potential customers of
          a restaraunt to select items from a menu, review and place orders that
          are stored locally. It also allows employees to access a
          password-locked CLI that can adjust prices, menu options, and review
          orders.
        </p>
        <div className="siteButtons">
          <a id="github" href="https://github.com/JoshuaToback/FullStacks-Cafe">
            Github
          </a>
          <a id="deploy" href="https://fullstackscafe.herokuapp.com/home.html">
            Live
          </a>
        </div>
        <div className="appTechnology">
          <h2>Technologies</h2>
          <ul>
            <img src={html5} alt="html" />
            <img src={css3} alt="css" />
            <img src={js} alt="js" />
            <img src={boot} alt="bootstrap" />
            <img src={mysql} alt="mysql" />
            <img src={node} alt="nodeJs" />
          </ul>
        </div>
      </div>
    </>
  );
}
