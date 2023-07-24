import React, {useState } from "react";
import nus_pic from '../../images/nus.png'
import { PageImage } from "../../../pages/PageImage"
import { Tabs, Tab } from "react-bootstrap";
import { CourseReviewPage } from "./nus_reviews/CourseReview";
import { PlannerPage } from "./planner/PlannerPage";
import {LearningPage} from "./self_learn/LearningPage";
import { CourseWork } from "./coursework/CourseWork";

const review_text = "These are the modules that I have completed over the course of my studies. You may click below to see my reviews. Do note that these are my thoughts alone and do not represent anybody's (Friends, University, or even Family members etc)";
const planner_text = "These are some of the modules I plan to take and also when I will take them. This is only tentative (thus subject to change)";
const learning_text = "Below are the skills and knowledge I currently am learning all by myself. I cannot possibly take all the courses in university, hence I am taking this opportunity to self-learn certain topics that might be useful to make me as versatile to the workforce as a potential software engineer, or as a research scientist in a academic setting."
const coursework_text = "Classes I took in school";

export const UniversityBlogPage = () => {

    let [paraText, setParaText] = useState(coursework_text)

    return (
    <>
    <PageImage source={nus_pic} filter={""} />
    <p style={{color:"white", marginLeft: '40px', marginRight:'40px', marginTop:'40px', marginBottom:'40px', fontSize:'25px', fontFamily:"monospace"}}>
        {paraText}
        {console.log(paraText)}
    </p>
    <Tabs
      defaultActiveKey="coursework"
      id="left-tabs-example-1"
      className="mb-3"
      style={{fontSize : "25px", backgroundColor : "grey", marginTop : '0%', fontFamily:"monospace", fontWeight:"bolder"}}
    >
    <Tab eventKey="coursework" title="Coursework" className="color-white" onEnter={() => setParaText(coursework_text)}>
    <CourseWork></CourseWork>
    </Tab>
    <Tab eventKey="reviews" title="NUS Course Reviews" className="color-white" onEnter={() => setParaText(review_text)}>
      <CourseReviewPage />
    </Tab>
    <Tab eventKey="planner" title="Planner" className="color-white" onEnter={() => setParaText(planner_text)}>
      <PlannerPage></PlannerPage>
    </Tab>
    <Tab eventKey="independent" title="Currently Learning" className="color-white" onEnter={() => setParaText(learning_text)}>
      <LearningPage></LearningPage>
    </Tab>
    </Tabs>
    </>
    );
}