import React from "react";
import ProjectCard from "./ProjectCard.jsx";

function ProjectList() {
  return (
    <div>
      <ProjectCard
        image={require("../images/sakamotocopy.png")}
        name="RSS Android App"
        link="https://github.com/rohithkaveri/KotlinRSS"
        content="Uses REST APIs OkHttp & Gson to fetch and parse JSON, 
        and Picasso API for Image caching. Recycler view and CardView was also used.
        Click on the title to see the github repo!"
        tag1="Kotlin"
        tag2="APIs"
        tag3="JSON"
      ></ProjectCard>
      <ProjectCard
        image={require("../images/sakamotocopy.png")}
        name="AUVSI Image Detection"
        link="https://docs.google.com/document/d/1I1a6f-vqlTCWZRCory_ffRNJg8VQM3hYkHZK5qKFYj8/edit?usp=sharing"
        content="Python project which uses OpenCV and YOLOv3 to accomplish 
        the classification and detection requirements of the AUVSI competition. 
        Trained neural networks and used the ORB algorithm for classification and 
        detection, respectively. Title link leads to the latest report on the successes and other issues to address.
        I am the team lead for the Image Recognition section of this project.
        Check Section on Classification/Detection for my part of the report!"
        tag1="YOLOv3"
        tag2="OpenCV"
        tag3="Python"
        tag4="Linux"
      ></ProjectCard>
      <ProjectCard
        image={require("../images/sakamotocopy.png")}
        name="ECRA (Early Career Research Assistant)"
        content="Queried google analytics data from Kaggle with Python and SQL. 
        Parsed csv with python to be used for data analysis, and 
        used predictive analysis skills such as k means, linear regression, and EDA.
        The full report is still being written, and as such, I will upload the link
        when it is finished."
        tag1="Python"
        tag2="mySQL"
        tag3=""
      ></ProjectCard>
      <ProjectCard
        image={require("../images/sakamotocopy.png")}
        name="Portfolio Website"
        link="https://github.com/rohithkaveri/Portfolio-Website"
        content="(This website!) Used HTML/JSX/CSS and React to build this simple single
        page website. Further updates will be a blog page, which will include
        node.js, mySQL, and React Router. Blog content will include issues/fixes and
        things I learned when building this website!"
        tag1="node"
        tag2="React"
        tag3="mySQL"
      ></ProjectCard>
    </div>
  );
}

export default ProjectList;
