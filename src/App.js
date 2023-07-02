import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Home />
        <Education />
        <Skill />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
