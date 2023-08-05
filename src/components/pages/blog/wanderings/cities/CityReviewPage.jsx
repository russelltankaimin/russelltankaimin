import React from "react";
import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useLocation } from "react-router-dom";
import { BackButton } from "../../../../backbutton/BackButton";

export const CityReviewPage = () => {
    const location = useLocation();
    const {
        cityname,
        country,
        continent,
        description
    } = location.state;
    return (
        <div style={{margin:"2% 15% 2% 15%"}}>
        <h1 className="city-name"><u>{cityname}</u>({country})</h1>
        <p className="city-intro">Continent: {continent}</p>
        <ReactMarkdown children={description} remarkPlugins={[remarkGfm]} />
        <BackButton description={"Back to Travels Page"} redirect_link={'/blog/travels'} />
        </div>
    )
}