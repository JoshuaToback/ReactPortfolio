import React from "react";
// import { useState } from "react";
import html5 from "../images/programs/HTML5.png";
import css3 from "../images/programs/css3.png";
import js from "../images/programs/javascript.png";
import mysql from "../images/programs/mysql.png";
import boot from "../images/programs/bootstrap-4-logo.png";
import node from "../images/programs/nodejs.png";
import ImageSlider from "../imageSlider";

import f1 from "../images/FullStack/F1.png";
import f2 from "../images/FullStack/F2.png";
import f3 from "../images/FullStack/F3.png";
import f4 from "../images/FullStack/F4.png";
import f5 from "../images/FullStack/F5.png";
import f6 from "../images/FullStack/F6.png";

export default function fullStack() {
  // const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [f1, f2, f3, f4, f5, f6];

  const descriptions = [
    <p>
      The Homepage of Fullstacks Cafe. Includes a slideshow of menu items and a
      button that starts the order taking process.
    </p>,
    <p>
      An interactive menu that stores selections in localStorage and creates an
      interactive cart for customers to adjust as they see fit.
    </p>,
    <p>
      A checkout page that can submit your order and store it in the local
      database.
    </p>,
    <p>
      Once an order is placed, it's stored in DBeaver and can be accessed
      through the CLI.
    </p>,
    <p>Within localStorage, the order is added to the table via MySQL.</p>,
    <p>Here in DBeaver, the table has been updated with the order details.</p>,
  ];

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
          <ImageSlider slides={slides} descriptions={descriptions} />
        </div>
        <div>
          <p className="fsInfo">
            A full stack, MVC dual application that allows potential customers
            of a restaraunt to select items from a menu, review and place orders
            that are stored locally. It also allows employees to access a
            password-locked CLI that can adjust prices, menu options, and review
            orders.
          </p>
        </div>
        <div className="appTechnology">
          <h2>Technologies</h2>
          <ul>
            <li>
              <img src={html5} alt="html" />
            </li>
            <li>
              <img src={css3} alt="css" />
            </li>
            <li>
              <img src={js} alt="js" />
            </li>
            <li>
              <img src={boot} alt="bootstrap" />
            </li>
            <li>
              <img src={mysql} alt="mysql" />
            </li>
            <li>
              <img src={node} alt="nodeJs" />
            </li>
          </ul>
        </div>
        <div className="siteButtons">
          <a id="github" href="https://github.com/JoshuaToback/FullStacks-Cafe">
            Github
          </a>
          <a id="deploy" href="https://fullstackscafe.herokuapp.com/home.html">
            Live
          </a>
        </div>
      </div>
    </>
  );
}
