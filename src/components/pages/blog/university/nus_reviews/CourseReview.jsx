import React from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import backupData from './backup_data/courses.json'
import { CourseReviewCard } from "./CourseReviewCard";
import Accordion from 'react-bootstrap/Accordion';
import nus_pic from '../../../images/nus.png'
import { Badge } from "react-bootstrap";
import { PageImage } from "../../../PageImage";

const API_LINK = "https://ap-southeast-2.cdn.hygraph.com/content/clip6zmzt0rd601upbtfxfwz3/master";

const QUERY = gql`
    {
    courseReviews (first:100){
      moduleName
      contentMain
      aysem {
        aySem
      }
    }
  }
`;

const retrieveBackUpData = () => {
    return backupData;
}

export const CourseReviewPage = (props) => {
    let {data, isLoading, isError} = useQuery("data", async () => {
        const res = await request(API_LINK, QUERY);
        return res;
    });
    console.log(isLoading, isError)
    if (data) {
        console.log(data["courseReviews"]);
    }
    if (isError || isLoading) {
        const dataDict = retrieveBackUpData();
        data = dataDict["data"];
    }
    return (
        <>
        <PageImage source={nus_pic} filter={""} />
        <p style={{color:"white", marginLeft: '40px', marginRight:'40px', marginTop:'40px', marginBottom:'40px', fontSize:'25px', fontFamily:"monospace"}}>
        These are the modules that I have completed over the course of my studies. You may click below to see my reviews. Do note that these are my thoughts alone 
        and do not represent anybody's (Friends, University, or even Family members etc)
        </p>
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


