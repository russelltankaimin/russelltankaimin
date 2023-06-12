import React, {useState } from "react";
import nus_pic from '../../images/nus.png'
import { PageImage } from "../../../pages/PageImage"
import { Tabs, Tab, TabPane } from "react-bootstrap";
import { CourseReviewPage } from "./nus_reviews/CourseReview";
import { PlannerPage } from "./planner/PlannerPage";

const review_text = "These are the modules that I have completed over the course of my studies. You may click below to see my reviews. Do note that these are my thoughts alone and do not represent anybody's (Friends, University, or even Family members etc)";
const planner_text = "These are some of the modules I plan to take and also when I will take them. This is only tentative (thus subject to change)";

export const UniversityBlogPage = () => {

    let [paraText, setParaText] = useState(review_text)

    const changeText = () => {
        setParaText(paraText === review_text ? planner_text : review_text);
        console.log(paraText)
    }

    return (
    <>
    <PageImage source={nus_pic} filter={""} />
    <p style={{color:"white", marginLeft: '40px', marginRight:'40px', marginTop:'40px', marginBottom:'40px', fontSize:'25px', fontFamily:"monospace"}}>
        {paraText}
        {console.log(paraText)}
    </p>
    <Tabs
      defaultActiveKey="reviews"
      id="left-tabs-example-1"
      className="mb-3"
      style={{fontSize : "30px", backgroundColor : "grey", marginTop : '0%', fontFamily:"monospace", fontWeight:"bolder"}}
    >
    <Tab eventKey="reviews" title="NUS Course Reviews" className="color-white" onEnter={changeText}>
      <CourseReviewPage />
    </Tab>
    <Tab eventKey="planner" title="Planner" className="color-white" onEnter={changeText}>
      <PlannerPage></PlannerPage>
    </Tab>
    <TabPane eventKey="coming soon" title="Coming Soon ..." disabled>
    </TabPane>
    </Tabs>
    </>
    );
}