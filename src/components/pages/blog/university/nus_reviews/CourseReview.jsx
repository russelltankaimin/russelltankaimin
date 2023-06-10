import React from "react";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import { CourseReviewCard } from "./CourseReviewCard";

const API_LINK = "https://api-ap-southeast-2.hygraph.com/v2/clip6zmzt0rd601upbtfxfwz3/master";

const QUERY = gql`
    {
    courseReviews {
      moduleName
      contentMain
      aysem {
        aySem
      }
    }
  }
`;

export const CourseReviewPage = (props) => {
    const {data} = useQuery("data", () => {
        return request(API_LINK, QUERY);
    });
    console.log(data["courseReviews"]);
    return (
        <>
           <div class="accordion">
            {data["courseReviews"].map(x => <CourseReviewCard moduleName={x.moduleName} content={x.contentMain}/>)}
           </div> 
        </>
    );
    // return <h1 style={{color:"white"}}>HIII</h1>
}


