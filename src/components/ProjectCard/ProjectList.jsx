import React from "react";
import ProjectCard from "./ProjectCard.jsx";

function ProjectList() {
  return (
    <div>
      <ProjectCard
        image={require("../images/sakamotocopy.png")}
        name="RSS Android App"
        content="This app was built with hard work and love."
      ></ProjectCard>
      <ProjectCard
        image={require("../images/sakamotocopy.png")}
        name="AUVSI Image Detection"
        content="This app was built with hard work and love."
      ></ProjectCard>
      <ProjectCard
        image={require("../images/sakamotocopy.png")}
        name="ECRA"
        content="This app was built with hard work and love."
      ></ProjectCard>
      <ProjectCard
        image={require("../images/sakamotocopy.png")}
        name="Portfolio"
        content="This app was built with hard work and love. (This website!)"
      ></ProjectCard>
    </div>
  );
}

export default ProjectList;
