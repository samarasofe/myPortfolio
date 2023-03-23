import React from "react";
import ProjectItem from "./ProjectItem";
import Proj1 from "../../assets/proj1.jpg"; 
import Proj2 from "../../assets/proj2.jpg";
import Proj3 from "../../assets/proj3.webp";
import Proj4 from "../../assets/proj6.png";


import "../Panel/Projects.css"

function Projects() {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projectList">
                <ProjectItem name={"Social Media Website"} image={Proj1}/>
                <ProjectItem name={"Spotify Clone"} image={Proj2}/>
                <ProjectItem name={"Netflix Clone"} image={Proj3}/>
                <ProjectItem name={"Wizard'z Game"} image={Proj4}/>

            </div>
        </div>
    );
}

export default Projects;