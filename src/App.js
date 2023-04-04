import React from "react";
import Footer from "./components/footer.js"
import Navbar from "./navbar";
import BackEnd from "./pages/backend";
import FrontEnd from "./pages/frontend";
import Home from "./pages/home";
import FullStack from "./pages/fullstack";
import Contact from "./pages/contact";


// import reactImg from "./images/programs/react.png"


import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line
import styles from "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/FrontEnd" element={<FrontEnd />} />
          <Route exact path="/BackEnd" element={<BackEnd />} />
          <Route exact path="/FullStack" element={<FullStack />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
