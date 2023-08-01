import React from "react";
import './Planner.css';
import picture from "./img/schedule.png"
import { PageImage } from '../../../PageImage'
import { BackButton } from "../../../../backbutton/BackButton";
import { PlannerList } from "./PlannerList";

export const PlannerPage = () => {

    return (<>
        <PageImage source={picture} />
        <h1 className="planner_header"><u>My Study Plan at NUS</u></h1>
        <p className="planner_intro">
        Below, I list all the potential classes that I am interested, and may take in the 
        whatever remaining semesters I have. For friends or juniors visiting and wanting to take
        classes with me , you may refer 
        to this page but do note, plans are not fixed as schedules change every academic year.
        </p>
        <br></br>
        <p className="planner_intro">
        Depending on CourseReg outcomes, plans will also change but I will update this as much as
        possible but it will not be so often.
        </p>
        <div style={{margin: "2% 15% 2% 15%"}}>
        <hr style={{color:"black", border:"3px solid"}}></hr>
        </div>
        <PlannerList></PlannerList>
        <div style={{margin: "2% 15% 2% 15%" }}>
        <BackButton description={"Back to About Me Page"} redirect_link={'/aboutme'} />
        </div>
    </>)
}