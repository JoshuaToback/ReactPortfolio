import react from "react";
import Navbar from "./navbar";
import BackEnd from "./pages/backend";
import FrontEnd from "./pages/frontend";
import Home from "./pages/home";
import FullStack from "./pages/fullstack";
import Contact from "./pages/contact";
import styles from "./styles.css";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/frontEnd":
      Component = FrontEnd;
      break;
    case "/backEnd":
      Component = BackEnd;
      break;
    case "/fullStack":
      Component = FullStack;
      break;
    case "/contact":
      Component = Contact;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
      <Component />
      </div>
    </>
  );
}

export default App;
