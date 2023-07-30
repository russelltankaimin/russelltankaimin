import React from "react";
import { Nav, CardGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { PageImage } from '../../PageImage.js';
import './Introduction.aboutme.css';
import pic from '../../images/russell_face.jpeg'

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
    <center style={{marginTop : "20px"}}>
    <CardGroup style={{margin:"2% 15% 2% 15%"}}>
        {links.map((bulk, index) => 
        <div >
        <Card className="redirector">
        <Card.Body>
            <Card.Title>
            <Nav.Link as={Link} to={bulk["link"]}>{bulk["name"]}</Nav.Link>
            </Card.Title>
            </Card.Body>
        </Card>
        </div>)}
    </CardGroup>
    </center>

</>