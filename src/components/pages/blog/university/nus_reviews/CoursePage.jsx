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
import { SeoInator } from "../../../../../seo/SeoInator";
import { HYGRAPH_API_LINK } from "../../../../../graphql/query_utils";

export const CoursePageAndReview = () => {
    console.log(window.location.pathname.split('/').slice(-1)[0])
    
    const slug = window.location.pathname.split('/').slice(-1)[0];

    let academic_year = null;
    let semester = null;

    let {data, isLoading, isError} = useQuery("data", async () => {
        const res = await request(HYGRAPH_API_LINK, getQueryFromSlug, {slug : slug});
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

    const seo = new SeoInator(
        {
            title: data.moduleName,
            url: window.location.pathname,
            description: data.description,
            imagePath: '/img/online-learning.png'
        }
    )
        
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
        {seo.to_string()}
        {seo.insert_helmet()}
        <BackButton description={"Back to NUS Course Reviews"} redirect_link={'/blog/uni'} />  
        </>
}



     


