import React from "react";
import './TimelineTree.css';
import picture from './img/experience.png'
import dataDict from './timeline.json';
import { PageImage } from "../../PageImage";
import { Chrono } from "react-chrono";
import { useMediaQuery } from "react-responsive";
import { BackButton } from "../../../backbutton/BackButton";

export const TimelineTree = () => {
    let data = dataDict["Timeline"];
    const isSmallScreen = useMediaQuery({maxWidth: 576});
    return (
        <>
        <PageImage source={picture} />
        <h1 className="exp_header"><u>The Trodden Road</u></h1>
        <p className="exp_intro">
            I have been studying in Singapore and have gone through the full 10 years of compulsory Singapore education
            and have gained and grown so much over the years. I have also been actively trying to find opportunities to 
            apply my skills in university and various internships. I hope to gain experience in both
            software engineering and research as well.
        </p>
        <div className="exp_tree">
        <Chrono
            items={data}
            mode="VERTICAL_ALTERNATING"
            itemWidth={25}
            fontSizes={{
                cardSubtitle: '0.85rem',
                cardText: '25px',
                cardTitle: '25px',
                title: '1rem',}}
            timelinePointDimension={isSmallScreen ? 5 : 30}
            
        />
        </div>
        <div style={{margin: "2% 15% 2% 15%" }}>
        <BackButton description={"Back to About Me Page"} redirect_link={'/aboutme'} />
        </div>
        </>
  );
}