import React from "react";
import { Nav, CardGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { PageImage } from '../../PageImage.js';
import './Introduction.aboutme.css';
import pic from '../../images/russell_face.jpeg'
import { SeoInator } from "../../../../seo/SeoInator.js";

const links = [
    {
        "link":'/aboutme/merits',
        "name": 'Merits'
    },
    {
        "link":'/aboutme/skills',
        "name": 'Skills'
    },
    {
        "link":'/aboutme/experiences',
        "name": 'Experiences'
    },
    {
        "link":'/aboutme/coursework',
        "name": 'Coursework'
    },
    {
        "link":'/aboutme/studyplan',
        "name": 'Planner'
    },
    {
        "link":'/aboutme/learning',
        "name": 'Learning'
    }

];

const seo = new SeoInator({
    title: "About Russell Tan Kai Min",
    description: "Below are some links where you can find out more about me in various aspects. This means getting to know what I am good at, what I have experienced, what I am up to in NUS and also what future plans I have for my lifelong learning.",
    url: window.location.pathname,
    imagePath: '../../PageImage.js'

})

export const Introduction = () => <>
    <PageImage source={pic}/>
    <h1 className="intro-header"><u>About Me</u></h1>
    <p className="intro">
    Below are some links where you can find out more about me in various aspects.
    This means getting to know what I am good at, what I have experienced, what I
    am up to in NUS and also what future plans I have for my lifelong learning. 
    <br></br>
    <br></br>
    For juniors who are interested, I have also included a list of coursework
    that I have done in my time at NUS, and for friends visiting looking to do classes
    with me, you may visit the planner by clicking on the appropriate tab below.
    </p>
    <center>
    <div style={{margin:"2% 15% 2% 15%"}}>
    <CardGroup style={{marginTop:"20px"}}>
        {links.map((bulk, index) => 
        <div style={{marginLeft:"2%", marginRight:"2%", marginBottom:"2%"}}>
        <Card className="redirector">
        <Card.Body>
            <Card.Title>
            <Nav.Link as={Link} to={bulk["link"]}>{bulk["name"]}</Nav.Link>
            </Card.Title>
            </Card.Body>
        </Card>
        </div>)}
    </CardGroup>
    </div>
    </center>
    {seo.to_string()}
    {seo.insert_helmet()}
</>