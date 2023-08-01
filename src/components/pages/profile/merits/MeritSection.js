import React from "react";
import dataDict from './merits.json';
import { MeritsCard } from "./MeritsCard";
import { Row } from "react-bootstrap";
import {PageImage} from "../../PageImage.js"
import picture from "./img/awards.png"
import './MeritsSection.css'
import { useMediaQuery } from "react-responsive";
import { BackButton } from "../../../backbutton/BackButton";

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
            <div style={{margin: "2% 15% 2% 15%" }}>
            <BackButton description={"Back to About Me Page"} redirect_link={'/aboutme'} />
            </div>
        </>
    );
}