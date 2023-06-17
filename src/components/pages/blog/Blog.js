import React from "react";
import blog_image from "../images/blogicon.png"
import { Button } from "react-bootstrap";
import {ButtonGroup} from "react-bootstrap";
import { PageImage } from "../PageImage";
import { Link } from "react-router-dom";

export const BlogLandingPage = () => {
    return (
        <>
        <PageImage source={blog_image} filter={false}/>
        <p style={{color:"white", marginLeft: '40px', marginRight:'40px', marginTop:'40px', marginBottom:'40px', fontSize:'25px', fontFamily:"monospace"}}>
        Good day! Welcome to my blog! Here I write down what usually interests me. My blog is split into 2 parts: NUS Module (Course) Reviews and
        my personal interests. You may click below to get redirected to where you want to go!
        <center style={{marginTop : "20px"}}>
        <ButtonGroup size="lg" className="mb-2" vertical>
        <Button variant="info" size="lg" style={{
            borderColor:"orange", margin : "20px 20px 20px 20px", borderWidth: "5px"}}>
          <Link to={'/blog/uni'} style={{marginLeft:'13px'}}>NUS Course Reviews</Link>
        </Button>
        <Button variant="info" size="lg" style={{
            borderColor:"orange", margin : "20px 20px 20px 20px", borderWidth: "5px"}}>
          <Link to={'/blog/interests'} style={{marginLeft:'13px'}}>Interests</Link>
        </Button>
        </ButtonGroup>
        </center>
        </p>
        </>
    );
}