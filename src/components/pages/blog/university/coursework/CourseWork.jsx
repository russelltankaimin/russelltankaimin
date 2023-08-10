import React from "react";
import "./Coursework.css";
import picture from './img/home-work.png';
import { SeoInator } from "../../../../../seo/SeoInator";
import { CourseTable } from "./CourseTable";
import { PageImage } from '../../../PageImage';
import { BackButton } from "../../../../backbutton/BackButton";

export const CourseWork = () => {

    const relativePath = window.location.pathname;

    const seo = new SeoInator({
        title: "My Coursework at NUS",
        description: "These are some of the courses that I have completed or are currently studying in NUS as part of my Double Degree Programme.",
        url: relativePath,
        imagePath: '/img/home-work.png'
    })

    return (
        <>
        <PageImage source={picture} />
        <h1 className="cw_header"><u>My Coursework at NUS</u></h1>
        <p className="cw_intro">
            These are some of the courses that I have completed or are currently studying
            in NUS as part of my Double Degree Programme. Juniors may take a look and perhaps decide
            what to take at any point of your studies.

            Please do note that this plan is dependent on individual abilities and time management.
        </p>
        <CourseTable />
        <div style={{margin: "2% 15% 2% 15%" }}>
        <BackButton redirect_link="/aboutme" description={"Back to About Me Page"} />
        </div>
        {seo.to_string()}
        {seo.insert_helmet()}
        </>
    );
}