import React from "react";
import { request } from "graphql-request";
import { BLOG_REVIEW_QUERY } from "../../../../../graphql/module_queries";
import { useQuery } from "react-query";
import backupData from './backup_data/courses.json'
import { CourseReviewCard } from "./CourseReviewCard";
import Accordion from 'react-bootstrap/Accordion';
import { Badge } from "react-bootstrap";

const API_LINK = "https://ap-southeast-2.cdn.hygraph.com/content/clip6zmzt0rd601upbtfxfwz3/master";


const retrieveBackUpData = () => {
    return backupData;
}

export const CourseReviewPage = (props) => {
    let {data, isLoading, isError} = useQuery("data", async () => {
        const res = await request(API_LINK, BLOG_REVIEW_QUERY);
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
        ? <Badge bg="danger" style={{fontSize : "20px", marginLeft: "30px" }}>GraphQL DB down</Badge> 
        : <Badge bg="success" style={{fontSize : "20px", marginLeft:"30px" }}>GraphQL DB connected</Badge>}
        <Accordion defaultActiveKey="0" style={{margin : "10px 30px 10px 30px"}}>
        {data["courseReviews"].map((x, index) => <CourseReviewCard moduleName={x.moduleName} content={x.contentMain} idx={index} aysem={x.aysem["aySem"]}/>)}
        </Accordion>
        </>
    );
    // return <h1 style={{color:"white"}}>HIII</h1>
}

