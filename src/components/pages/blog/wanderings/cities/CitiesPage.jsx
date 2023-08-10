import React from "react";
import { useQuery } from "react-query";
import request from "graphql-request";
import { Badge, CardGroup } from "react-bootstrap";
import { CityReviewCard } from "./CityReview";
import { useMediaQuery } from "react-responsive";
import { CITY_QUERY } from '../../../../../graphql/cities_queries';
import dataDict from './citiesbackup.json';
import { HYGRAPH_API_LINK } from "../../../../../graphql/query_utils";
const DB_DOWN = "DB DOWN";
const DB_UP = "DB CONNECTED"

export const CitiesPage = () => {

    let {data, isLoading, isError} = useQuery("data", async () => {
        const res = await request(HYGRAPH_API_LINK, CITY_QUERY);
        return res;
    });

    if (isError || isLoading) {
        data = dataDict["data"];
    }

    const isSmallScreen = useMediaQuery({maxWidth: 576})

    const CONTINENTS = ["Asia", "Europe", "Australia/Oceania", "Africa", "America"];

    return (
        <>
        <h3 className="wanderings-header"><u>Cities Reviews</u> {(isError || isLoading) 
            ? <Badge bg="danger" style={{fontSize : "20px", marginLeft:"2%", marginBottom:"15px"}}>{isSmallScreen ? DB_DOWN : "GraphQL DB DOWN"}</Badge> 
            : <Badge bg="success" style={{fontSize : "20px", marginLeft:"2%", marginBottom:"1px"}}>{isSmallScreen ? DB_UP : "GraphQL DB connected"}</Badge>}</h3>
            {/* <div style={{margin:"2% 15% 2% 15%"}}> */}
            {data["citiesVisiteds"] != null
            ?  CONTINENTS.map((continent, index) => <>
                <h4 style={{margin:"2% 15% 2% 15%"}}><u>{continent}</u></h4>
                <CardGroup style={{margin:"2% 15% 2% 15%"}}>
                {(() => {
                    let filteredItems = data["citiesVisiteds"].filter((obj) => obj.continent === continent)
                    console.log(filteredItems)
                    return filteredItems.length === 0 
                    ? <p>Have Not Visited! Only in my dreams...</p>
                    : filteredItems.map((x, index) => 
                    <CityReviewCard 
                    slug={x.slug}
                    country={x.country} 
                    continent={x.continent}
                    description={x.description}
                    cityname={x.cityName}
                    />)
                })()}
                </CardGroup>
                </>)
            : <p>Loading ... </p>}

        </>
    );
}