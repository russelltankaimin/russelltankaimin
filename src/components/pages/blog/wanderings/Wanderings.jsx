import React from "react";
import { PageImage } from "../../PageImage";
import picture from './img/travel.png';
import './Wanderings.css'
import { BackButton } from "../../../backbutton/BackButton";

export const Wanderings = () => {
    return (
        <>
            <PageImage source={picture} />
            <h1 className="wanderings-header"><u>My Wanderings</u></h1>
            <p className="wanderings-intro">
            Put it in short: I like to travel alot, be it overseas and even locally. My parents like to 
            bring me to places like Europe since I like to read up on European History and Culture so much.
            It really puts you into a perspective whereby you are just a single person, so small, yet there is
            a whole wide world around you</p>
            <br></br>
            <p className="wanderings-intro">
            Locally, I take extremely long hikes around Singapore by foot. For safety reasons, I do so with my friends
            from university. My friend has made a <a href="https://www.izzhafeez.com/blog/hikes">hiking blog</a> out of it, so I shall not repeat myself. Nonetheless,
            you may see below for the different cities that I have been to!</p>

            <h3 className="wanderings-header"><u>Cities Reviews</u></h3>
            <p className="wanderings-intro">Still under construction</p>
            <BackButton description={"Back to Blog Page"} redirect_link={'/blog'} />
        </>
    )
}