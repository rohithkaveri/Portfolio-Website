import React from "react";
import "./App.css";
import Title from "./components/Title.jsx";
import AboutMe from "./components/AboutMe";
import Toolbar from "./components/Toolbar/Toolbar";
import ProjectList from "./components/ProjectCard/ProjectList";

function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <div className="wrap">
        <Title></Title>
        <AboutMe></AboutMe>
        <span className="proj-title">PROJECTS</span>
        <ProjectList></ProjectList>
      </div>
    </div>
  );
}

export default App;
