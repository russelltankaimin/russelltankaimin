import React from "react";
import { PageImage } from "../../PageImage";
import picture from './img/travel.png';
import './Wanderings.css'
import {useMediaQuery} from 'react-responsive';
import {CityReviewCard} from './cities/CityReview';
import { BackButton } from "../../../backbutton/BackButton";
import { BlockQuote } from "../university/components/BlockQuote";
import { useQuery } from "react-query";
import { CITY_QUERY } from "../../../../graphql/cities_queries";
import request from "graphql-request";
import { Badge, CardGroup } from "react-bootstrap";

const DB_DOWN = "DB DOWN";
const DB_UP = "DB CONNECTED"

export const Wanderings = () => {

    const API_LINK = "https://ap-southeast-2.cdn.hygraph.com/content/clip6zmzt0rd601upbtfxfwz3/master";

    let {data, isLoading, isError} = useQuery("data", async () => {
        const res = await request(API_LINK, CITY_QUERY);
        return res;
    });

    const isSmallScreen = useMediaQuery({maxWidth: 576})

    const CONTINENTS = ["Asia", "Europe", "Australia/Oceania", "Africa", "America"];

    return (
        <>
            <PageImage source={picture} />
            <h1 className="wanderings-header"><u>My Wanderings</u></h1>
            <p className="wanderings-intro">
            Put it in short: I like to travel alot, be it overseas and even locally. My parents like to 
            bring me to places like Europe since I like to read up on European History and Culture so much.
            However, I sometimes dream that I can travel to exotic places like Central Asia (Samarkand, along the Silk Road),
            South America and even Antarctica!
            It really puts you into a perspective whereby you are just a single person, so small, yet there is
            a whole wide world around you</p>
            <br></br>
            <div style={{margin:"2% 15% 2% 15%"}}>
            <BlockQuote content={
            '"The world is a book, and those who do not travel read only one page."\n-Saint Augustine'}
            /></div>
            <h3 className="wanderings-header"><u>Local Hikes</u></h3>
            <p className="wanderings-intro">
            Locally, I take extremely long hikes around Singapore by foot. For safety reasons, I do so with my friends
            from university. My friend has made a <a href="https://www.izzhafeez.com/blog/hikes">hiking blog</a> out of it, so I shall not repeat myself. Nonetheless,
            you may see below for the different cities that I have been to!</p>
            <h3 className="wanderings-header"><u>Cities Reviews</u> {(isError || isLoading) 
            ? <Badge bg="danger" style={{fontSize : "20px", marginLeft:"2%", marginBottom:"15px"}}>{isSmallScreen ? DB_DOWN : "GraphQL DB DOWN"}</Badge> 
            : <Badge bg="success" style={{fontSize : "20px", marginLeft:"2%", marginBottom:"1px"}}>{isSmallScreen ? DB_UP : "GraphQL DB connected"}</Badge>}</h3>
            {/* <div style={{margin:"2% 15% 2% 15%"}}> */}
            {data["citiesVisiteds"] 
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
            {/* </div> */}
            <BackButton description={"Back to Blog Page"} redirect_link={'/blog'} />
        </>
    )
}