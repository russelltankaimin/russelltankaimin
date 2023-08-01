import React from "react";
import blog_image from "../images/blogicon.png"
import { CardGroup, Card, Nav } from "react-bootstrap";
import { PageImage } from "../PageImage";
import { Link } from "react-router-dom";
import './Blog.css';

const links = [
  {
    "link" : "/blog/uni",
    "name"  : "NUS Course Reviews"
  },
  {
    "link" : "/blog/interests",
    "name"  : "Miscellaneous"
  }
]

export const BlogLandingPage = () => {
    return (
        <>
        <PageImage source={blog_image}/>
        <h1 className="blog-header"><u>My Blog</u></h1>
        <p className="blog-intro">
        Good day! Welcome to my blog! Here I write down what usually interests me. My blog is split into 2 parts: NUS Module (Course) Reviews and
        my personal interests. You may click below to get redirected to where you want to go!
        <center style={{marginTop : "20px"}}>
        <CardGroup style={{margin:"2% 15% 2% 15%"}}>
        {links.map((bulk, index) => 
        <div >
        <Card className="redirector">
        <Card.Body style={{width:"10rem", height:"5rem"}}>
            <Card.Title>
            <Nav.Link as={Link} to={bulk["link"]}>{bulk["name"]}</Nav.Link>
            </Card.Title>
            </Card.Body>
        </Card>
        </div>)}
        </CardGroup>
        </center>
        </p>
        </>
    );
}