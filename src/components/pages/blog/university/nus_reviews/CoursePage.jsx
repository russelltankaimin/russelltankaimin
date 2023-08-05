import React from "react";
import remarkGfm from 'remark-gfm';
import './CoursePage.css'
import picture from './img/online-learning.png'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useLocation } from "react-router-dom";
import { PageImage } from "../../../PageImage";
import { BlockQuote } from "../components/BlockQuote";
import { BackButton } from "../../../../backbutton/BackButton";

export const CoursePageAndReview = () => {
    const location = useLocation();
    const {
        content,
        moduleName,
        description,
        aySem
    } = location.state
    const academic_year = aySem.slice(0, 23);
    const semester = aySem.slice(23)
    return (
        <>
        <PageImage source={picture} />
        <h1 className="course-name"><u>{moduleName}</u></h1>
        <p className="course-intro">{academic_year}</p>
        <p className="course-intro">{semester}</p>
        <div style={{margin:"2% 15% 2% 15%"}}>
        <h3 style={{fontFamily:"Times New Roman"}}><u>NUSMods description</u></h3>
        <BlockQuote content={description}/>
        <h3 style={{fontFamily:"Times New Roman"}}><u>Review</u></h3>
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        </div>
        <BackButton description={"Back to NUS Course Reviews"} redirect_link={'/blog/uni'} />
        </>
    )
}