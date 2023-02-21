import React from "react";
// import html5 from "../images/programs/HTML5.png";
// import css3 from "../images/programs/css3.png";
// import js from "../images/programs/javascript.png";
import dd from "../images/DD.png";
import cq from "../images/CodeQuiz.png";
import wd from "../images/weather.png";

export default function frontEnd() {
  return (
    <>
      <div className="pageTitle">
        <h1>Front End</h1>
      </div>
      <div id="grid">
        <div className="left">
          <h2 className="programTitle">Weather Dashboard</h2>
          <div className="app">
            <div className="techImage">
              <img src={wd} alt="WeatherDash"></img>
            </div>
            <div className="techInfo">
              <p>
                Utilizing Day.js, moment.js, localStorage, and the
                OpenWeatherAPI, this application lets you see the current
                weather, as well the five-day-forecast.{" "}
              </p>
            </div>

            <div className="siteButtons">
              <a
                id="github"
                href="https://github.com/JoshuaToback/weather-dashboard"
              >
                Github
              </a>
              <a
                id="live"
                href="https://joshuatoback.github.io/weather-dashboard/"
              >
                Live
              </a>
            </div>

            <h3>Technologies Used</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>OpenWeatherAPI</li>
              </ul>
          </div>
        </div>
        <div className="center">
          <h2 className="programTitle">Drive Destination</h2>
          <div className="app">
            <div className="techImage">
              <img src={dd} alt="DriveDestination"></img>
            </div>
            <div className="techInfo">
              <p>
                Developed using Google's Distance Matrix API, this website
                calculates and displays the travel distance and time between two
                United States-based locations.
              </p>
            </div>

            <div className="siteButtons">
              <a
                id="github"
                href="https://github.com/JoshuaToback/Drive-Destination"
              >
                Github
              </a>
              <a
                id="live"
                href="https://joshuatoback.github.io/Drive-Destination/"
              >
                Live
              </a>
            </div>
            <div>
            <h3>Technologies Used</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Google Distance Matrix API</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right">
          <h2 className="programTitle">Code Quiz</h2>
          <div className="app">
            <div className="techImage">
              <img src={cq} alt="CodeQuiz"></img>
            </div>
            <div className="techInfo">
              <p>
                Using localStorage, this application is a quiz game that stores
                the time spent playing as a high score, and deducts points for a
                missed question.
              </p>
            </div>
            <div className="siteButtons">
              <a id="github" href="https://github.com/JoshuaToback/code-quiz">
                Github
              </a>
              <a id="live" href="https://joshuatoback.github.io/code-quiz/">
                Live
              </a>
            </div>
            <h3>Technologies Used</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}
