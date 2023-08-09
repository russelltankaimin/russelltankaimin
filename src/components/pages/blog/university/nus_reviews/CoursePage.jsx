import React from "react";
import remarkGfm from 'remark-gfm';
import './CoursePage.css'
import backupdata from './backup_data/courses.json';
import picture from './img/online-learning.png'
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PageImage } from "../../../PageImage";
import { BlockQuote } from "../components/BlockQuote";
import { BackButton } from "../../../../backbutton/BackButton";
import { useQuery } from "react-query";
import request from "graphql-request";
import { getQueryFromSlug } from "../../../../../graphql/module_queries";

const API_LINK = "https://ap-southeast-2.cdn.hygraph.com/content/clip6zmzt0rd601upbtfxfwz3/master";

export const CoursePageAndReview = () => {
    console.log(window.location.pathname.split('/').slice(-1)[0])
    
    const slug = window.location.pathname.split('/').slice(-1)[0];

    let academic_year = null;
    let semester = null;

    let {data, isLoading, isError} = useQuery("data", async () => {
        const res = await request(API_LINK, getQueryFromSlug, {slug : slug});
        return res;
    });

    if (isLoading || isError) {
        return <h1>Loading ... </h1>
    } else {
        try {
            console.log(data)
            data = data["courseReview"];
            console.log("DATA CHECK",data.aysem)
            academic_year = data.aysem["aySem"].slice(0, 23);
            semester = data.aysem["aySem"].slice(23);
            console.log("Using Database Result")
        } catch (error) {
            console.log("Using backup data !! =(")
            data = backupdata["data"]["courseReviews"].filter(x => x.slug === slug)[0];
            academic_year = data.aysem["aySem"].slice(0, 23);
            semester = data.aysem["aySem"].slice(23);
        }
    }
        
    return <>
        <PageImage source={picture} />
        <h1 className="course-name"><u>{data.moduleName}</u></h1>
        <p className="course-intro">{academic_year}</p>
        <p className="course-intro">{semester}</p>
        <div style={{margin:"2% 15% 2% 15%"}}>
        <h3 style={{fontFamily:"Times New Roman"}}><u>NUSMods description</u></h3>
        <BlockQuote content={data.description}/>
        <h3 style={{fontFamily:"Times New Roman"}}><u>Review</u></h3>
        <ReactMarkdown children={data.contentMain} remarkPlugins={[remarkGfm]} />
        </div>
        <BackButton description={"Back to NUS Course Reviews"} redirect_link={'/blog/uni'} />  
        </>
}



     


