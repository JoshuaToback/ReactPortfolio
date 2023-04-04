import React from "react";
import headshot from "../images/headshot.jpg";
import html5 from "../images/programs/HTML5.png";
import css3 from "../images/programs/css3.png";
import js from "../images/programs/javascript.png";
import mysql from "../images/programs/mysql.png";
import nosql from "../images/programs/nosql.png";
import boot from "../images/programs/bootstrap-4-logo.png";
import mern from "../images/programs/Mern.png";

export default function home() {
  return (
    <>
      <div className="pageTitle">
        <h1>Full Stack Web Developer</h1>
      </div>
      <div className="intro-container">
        <div className="aboutMe">
          <h2>About Me</h2>
          <p>
            Hello! My name is 
            <b>
              <i> Joshua Toback</i>
            </b>
            .
          </p>
          <p>
            I am a Cinema and TV Arts major who transitioned into Full Stack
            Software Engineering and UI / UX Web Development!
          </p>
          <p>
            I specialize in planning, formatting, and designing functional
            websites and applications! Ever since I played my first Flash game
            in 2007, I've wanted to be a part of my own website. My love of web
            design stems from wanting the sites that I use personally to be
            refactored and streamlined into something clean and efficient. If I
            had to describe my programming style in one word, it would be
            <b>
              <i> thoughtful.</i>
            </b>
          </p>
          <p>
            Outside of programming I enjoy voice acting, streaming video games,
            listening to music, and playing drums and bass!
          </p>

          <p>Click the links above to check out my projects!</p>
        </div>

        <div className="headshot">
          <img src={headshot} alt="headshot" />
          {/* <div className="hide">
                    <p>I am also a voice actor, screenwriter, streamer, and musician!</p>
                </div> */}
        </div>

        <div className="technology">
          <h2>Skills</h2>
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
          </ul>
          <ul>
            <li>
              <img src={boot} alt="bootstrap" />
            </li>
            <li>
              <img src={nosql} alt="nosql" />
            </li>
            <li>
              <img src={mysql} alt="mysql" />
            </li>
          </ul>
          <img id="mern" src={mern} alt="mern" />
        </div>
      </div>
    </>
  );
}
