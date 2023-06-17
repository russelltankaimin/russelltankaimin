import React from "react";
import { PageImage } from "../PageImage";
import picture from "../images/projects.png"
import { ProjectCard } from "./ProjectCard";
import data from "./projects.json";
import { Row } from "react-bootstrap";

export const SoftwarePage = () => {
    return (
        <>
        <PageImage source={picture} filter={""} />
        <p style={{color:"white", marginLeft: '40px', marginRight:'40px', marginTop:'40px', marginBottom:'40px', fontSize:'25px', fontFamily:"monospace"}}>
        I have done some projects in school and my own spare time. I do them usually because of something that I want to experiment with, have fun and learn from.
        Projects started after May 2023 are shifted to my Github Organisation : russell-project-org.
        </p>
        <h3 style={{color:"white", marginLeft:"40px"}}>In Progress / Planned</h3>
        <hr style={{color:"white"}}></hr>
        <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-1">
        {data["in_progress"].map(proj => <ProjectCard project={proj}/>)}
        </Row>
        <h3 style={{color:"white", marginLeft:"40px"}}>Past Projects</h3>
        <hr style={{color:"white"}}></hr>
        <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-1">
        {data["completed"].map(proj => <ProjectCard project={proj}/>)}</Row>
        </>
    );
}