import React from "react";
import { ContentSkills, SkillsContainer } from "./styles";
import html5 from "../../assets/icons-skills/html5.png"
import css3 from "../../assets/icons-skills/css3.png"
import bootstrap from "../../assets/icons-skills/bootstrap.png"
import git from "../../assets/icons-skills/git.png"
import js from "../../assets/icons-skills/javascript.png"
import jira from "../../assets/icons-skills/jira.png"
import mysql from "../../assets/icons-skills/mysql.png"
import nodejs from "../../assets/icons-skills/nodejs.png"
import reactjs from "../../assets/icons-skills/react.png"
import seo from "../../assets/icons-skills/seo.png"
import styledcomponents from "../../assets/icons-skills/styled-components.png"
import wordpress from "../../assets/icons-skills/wordpress.png"


export default function Skills() {
    return(
    <SkillsContainer>
        <h1>Skills</h1>
        <ContentSkills> 
            <div>
                <img src={html5} alt="HTML"></img>
            </div>

            <div>
                <img src={css3} alt="CSS3"></img>
            </div>

            <div>
                <img src={js} alt="JavaScript"></img>
            </div>

            <div>
                <img src={git} alt="Git"></img>
            </div>    

            <div>
                <img src={reactjs} alt="ReactJS"></img>
            </div>

            <div>
                <img src={nodejs} alt="NodeJS"></img>
            </div>
            
            <div>
                <img src={mysql} alt="MySQL"></img>
            </div>
            
            <div>
                <img src={bootstrap} alt="Bootstrap"></img>
            </div>
            
            <div>
                <img src={styledcomponents} alt="styled-components"></img>
            </div>
            
            <div>
                <img src={seo} alt="SEO"></img>
            </div>
            
            <div>
                <img src={jira} alt="JIRA"></img>
            </div>
            
            <div>
                <img src={wordpress} alt="Wordpress"></img>
            </div>      

        </ContentSkills>

    </SkillsContainer>
    )
}