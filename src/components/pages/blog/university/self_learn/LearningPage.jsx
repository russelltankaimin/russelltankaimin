import React from "react";
import './Learning.css'
import picture from './img/machine-learning.png'
import { PageImage } from "../../../PageImage";
import { LearningItems } from "./LearningItems";
import { BackButton } from "../../../../backbutton/BackButton";

export const LearningPage = () => {
    return (<>
        <PageImage source={picture} />
        <h1 className="learning_header"><u>My Learning Initiatives</u></h1>
        <p className="learning_intro">
        I am a very self-directed learning, meaning that I do not
        wait for professors to go through material and I take the
        initiative to pick up certain knowledge and skills by myself.

        Moreover in NUS, there can be a lot of clashes which result in 
        some changes in your original study plan. This means the opportunity
        of taking certain classes may be gone (sometimes gone for good -- Looking
        at you NUS Math Department).
        <br></br><br></br>
        Some of my methods of learning and acquiring knowledge would be to 
        do Coursera Courses, or for Mathematics, read research papers and some
        classic Maths Textbooks. Youtube is also one avenue where I frequent most
        of the time for Science content. I appreciate the efforts of Science (or generally STEM)
        Youtubers (ScienceTubers) in trying to explain some complex ideas to pique the interest
        of the wider audience.
        <br></br><br/>
        Below are some topics I am interested in learning and a short description.
        </p>
        <div style={{margin: "2% 15% 2% 15%"}}>
        <LearningItems />
        </div>
        <div style={{margin: "2% 15% 2% 15%" }}>
        <BackButton description={"Back to About Me Page"} redirect_link={'/aboutme'} />
        </div>
    </>)
}