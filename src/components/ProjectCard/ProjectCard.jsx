import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { name, image, content, link, tag1, tag2, tag3, tag4, tag5 } = props;
  return (
    <div className="card-wrapper">
      <div className="img-wrapper">
        <img src={image} alt="img"></img>
        <div className="text-items">
          <a href={link} className="card-title">
            {name}
          </a>
          <p>{content}</p>
          <div className="taglist">
            <span className="tags">{tag1}</span>
            <span className="tags">{tag2}</span>
            <span className="tags">{tag3}</span>
            <span className="tags">{tag4}</span>
            <span className="tags">{tag5}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
