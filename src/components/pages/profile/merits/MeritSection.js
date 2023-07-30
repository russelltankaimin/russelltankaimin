import React from "react";
import dataDict from './merits.json';
import { MeritsCard } from "./MeritsCard";
import { Row, Card, Nav, CardGroup } from "react-bootstrap";
import {PageImage} from "../../PageImage.js"
import picture from "./img/awards.png"
import './MeritsSection.css'
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export const MeritSection = () => {
    let data = dataDict["Participation History"];
    const isSmallScreen = useMediaQuery({maxWidth: 576});
    return (
        <>
            <PageImage source={picture} />
            <h1 className="merits-header"><u>My Achievements</u></h1>
            <p className="merits-intro">
                Below are a few of my selected involvements and achievements over the years. I have a lot of awards on my
                record but there are too many to fit in this tiny margin (Totally not quoting Pierre de Fermat). Not on the list
                below are my test scores (PSLE/GCE O-Level/A-Level or University Results), Coursera courses I completed and awards received
                during Primary School and National Service.
            </p>
            <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-3" style={!isSmallScreen 
            ? {margin:"2% 10% 2% 15%"} 
            : {margin:"1% 20% 10% 1%"}}>
            {data.map(x => 
            <MeritsCard name={x.name} years={x.year} awards={x.awards}/>)}
            
            </Row>
            <CardGroup style={ !isSmallScreen ? {margin:"2% 10% 2% 15%"} : {margin:"1% 10% 10% 10%"}}>
            <Card className="redirector">
            <Card.Body>
            <Card.Title>
            <Nav.Link as={Link} to={"/aboutme"}>Back to About Me Page</Nav.Link>
            </Card.Title>
            </Card.Body>
            </Card>
            </CardGroup>
        </>
    );
}