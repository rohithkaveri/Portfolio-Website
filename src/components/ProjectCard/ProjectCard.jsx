import React from "react";
import "./ProjectCard.css";
import futabacopy from "../images/futabacopy.png";

function ProjectCard(props) {
  const { name, image, content } = props;
  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
        <img src={image} alt="img"></img>
        <div className="text-items">
          <b>{name}</b>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
