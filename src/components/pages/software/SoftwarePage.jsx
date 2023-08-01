import React from "react";
import "./SoftwarePage.css"
import { PageImage } from "../PageImage";
import picture from "../images/projects.png"
import { ProjectCard } from "./ProjectCard";
import data from "./projects.json";
import { Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export const SoftwarePage = () => {

    const isSmallScreen = useMediaQuery({maxWidth: 576});
    const renderPlannedProjects = data["in_progress"].map(proj => <ProjectCard project={proj}/>)

    return (
        <>
        <PageImage source={picture}/>
        <h1 className="swe_header"><u>My Software/Projects Log</u></h1>
        <p className="swe_intro">
        I have done some projects in school and my own spare time. I do them usually because of something that I want to experiment with, have fun and learn from.
        Projects started after May 2023 are shifted to my Github Organisation : russell-project-org.
        </p>
        <div style={{margin:"2% 15% 2% 15%"}}>
        <hr style={{color:"black", border:"3px solid"}}></hr>
        <h3>In Progress / Planned</h3>
        <hr style={{color:"black", border:"3px solid"}}></hr>
        {isSmallScreen 
        ?  <div>
        {renderPlannedProjects}
        </div>
        : <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-1">
        {renderPlannedProjects}
        </Row> }
        <hr style={{color:"black", border:"3px solid"}}></hr>
        <h3>Past Projects</h3>
        <hr style={{color:"black", border:"3px solid"}}></hr>
        <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-1">
        {data["completed"].map(proj => <ProjectCard project={proj}/>)}</Row>
        </div>
        </>
    );
}