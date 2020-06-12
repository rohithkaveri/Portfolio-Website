import React from "react";
import logo from "/Users/rohithkaveri/Documents/React_Projects/portfolio-site/src/logo.svg";
import "./Toolbar.css";

function Toolbar() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav className="nav_links">
        <ul>
          <li>
            <a href="#/About-Me">About Me</a>
          </li>
          <li>
            <a href="#/Projects">Projects</a>
          </li>
          <li>
            <a href="#/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Toolbar;
