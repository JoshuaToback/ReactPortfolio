import react from "react";
import Navbar from "./navbar";
import BackEnd from "./pages/backend";
import FrontEnd from "./pages/frontend";
import Home from "./pages/home";
import FullStack from "./pages/fullstack";
import Contact from "./pages/contact";
import { Route, Routes } from 'react-router-dom';
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
    </>
  );
}

export default App;
