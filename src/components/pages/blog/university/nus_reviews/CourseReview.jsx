import React from "react";
import { request } from "graphql-request";
import { BLOG_REVIEW_QUERY } from "../../../../../graphql/module_queries";
import { useQuery } from "react-query";
import { HYGRAPH_API_LINK } from "../../../../../graphql/query_utils";
import backupData from './backup_data/courses.json'
import { CourseReviewTab } from "./CourseReviewCard";
import { Badge } from "react-bootstrap";

const retrieveBackUpData = () => {
    return backupData;
}

export const CourseReviewPage = (props) => {

    let {data, isLoading, isError} = useQuery("data", async () => {
        const res = await request(HYGRAPH_API_LINK, BLOG_REVIEW_QUERY);
        return res;
    });
    console.log(isLoading, isError)
    if (data) {
        //console.log(data["courseReviews"]);
    }
    if (isError || isLoading) {
        const dataDict = retrieveBackUpData();
        data = dataDict["data"];
    }
    return (
        <>    
        {(isError || isLoading) 
        ? <Badge bg="danger" style={{fontSize : "20px", marginLeft:"30px", marginBottom:"15px"}}>GraphQL DB down</Badge> 
        : <Badge bg="success" style={{fontSize : "20px", marginLeft:"30px", marginBottom:"15px"}}>GraphQL DB connected</Badge>}
        {/* {data["courseReviews"].map((x, index) => <CourseReviewCard moduleName={x.moduleName} content={x.contentMain} idx={index} aysem={x.aysem["aySem"]}/>)} */}
        { data["courseReviews"] != null ? data["courseReviews"].map((x, index) => <CourseReviewTab moduleName={x.moduleName} content={x.contentMain} idx={index} aysem={x.aysem["aySem"]} slug={x.slug} description={x.description}/>)
        : <p>Loading...</p>
        }
        </>
    );
    // return <h1 style={{color:"white"}}>HIII</h1>
}


