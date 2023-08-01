import React from "react";
import nus_pic from '../../images/nus.png'
import './UniversityBlog.css'
import { PageImage } from "../../../pages/PageImage"
import { CourseReviewPage } from "./nus_reviews/CourseReview";
import { BackButton } from "../../../backbutton/BackButton";
import { useMediaQuery } from "react-responsive";

export const UniversityBlogPage = () => {
    const isSmallScreen = useMediaQuery({maxWidth: 576});
    return (
    <>
    <PageImage source={nus_pic} filter={""} />
    <h1 className="uniblog-header"><u>NUS Course Reviews</u></h1>
    <p className="uniblog-intro">
    These are the modules that I have completed over the course of my studies. You may click below to see my reviews. Do note that these are my thoughts alone and do not represent anybody's (Friends, University, or even Family members etc).
    I also try to be extremely honest with what I have experienced for the benefit of people looking to take these classes under certain professors.
    Of course, the same professors might change assessment or lecture style, so do not expect your experience to be the same as mine.
    </p>
    <div style={isSmallScreen ? {margin:"2% 0.25% 2% 0.25%"} : {margin: "2% 15% 2% 15%" }}>
    <CourseReviewPage/>
    </div>
    <div style={{margin: "2% 15% 2% 15%" }}>
    <BackButton description={"Back to Blog Page"} redirect_link={'/blog'} />
    </div>
    </>
    );
}