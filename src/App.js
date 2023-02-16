import React from "react";
import Navbar from "./navbar";
import BackEnd from "./pages/backend";
import FrontEnd from "./pages/frontend";
import Home from "./pages/home";
import FullStack from "./pages/fullstack";
import Contact from "./pages/contact";


// import reactImg from "./images/programs/react.png"
import github from "./images/github.png"
import linked from "./images/linkedin.png"
import email from "./images/eMail.png"

import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line
import styles from "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FrontEnd" element={<FrontEnd />} />
          <Route path="/BackEnd" element={<BackEnd />} />
          <Route path="/FullStack" element={<FullStack />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <footer>
        <div className="footer">
          <h2>Developed by Joshua Toback</h2>
          <ul className="socials">
            <li>
              <a href="https://github.com/JoshuaToback">
                <img className="appIcon" src={github} alt="github"></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshua-toback/">
                <img className="appIcon" src={linked} alt="linkedin"></img>
              </a>
            </li>
            <li>
              <a href="mailto:joshuatobackdev@gmail.com">
                <img className="appIcon" src={email} alt="email"></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
