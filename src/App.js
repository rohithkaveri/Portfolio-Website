import React from "react";
import "./App.css";
import Title from "./components/Title.jsx";
import AboutMe from "./components/AboutMe";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <div className="wrap">
        <Title></Title>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}

export default App;
