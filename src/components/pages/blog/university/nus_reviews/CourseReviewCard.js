import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Accordion from 'react-bootstrap/Accordion';
import remarkGfm from 'remark-gfm';
import { Badge, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CourseReviewCard = (props) => {
    // console.log(props.content)
    const obj = props.aysem;
    return (
        <Accordion defaultActiveKey="0" style={{margin : "10px 50px 10px 50px"}}>
        <Accordion.Item eventKey={props.idx} style={{marginBottom:"10px", borderColor:"#3E9F9F", borderWidth:"2px", fontSize:"20px"}}>
            <Accordion.Header style={{fontWeight:"bolder", fontSize:"30px"}}>
            {props.moduleName}
            </Accordion.Header>
            <Accordion.Body style={{backgroundColor:"#D8D5DB"}}>
            <Badge bg="warning" text="dark" style={{marginBottom:"10px", fontSize:"15px", wordWrap:"break-word"}}>
            {obj.slice(0, 23)}
            </Badge>
            <br></br>
            <Badge bg="success" style={{marginBottom:"10px", fontSize:"15px", wordWrap:"break-word"}}>
            {obj.slice(23)}
            </Badge>
            <ReactMarkdown children={props.content} remarkPlugins={[remarkGfm]}></ReactMarkdown>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
}

export const CourseReviewTab = (props) => {
    const obj = props.aysem;
    const URL = props.slug;
    return (<>
        <Card>
        <Card.Body>
        <Nav.Link as={Link} to={`/blog/uni/${URL}`}
                state={{content:props.content}}>
        <u>{props.moduleName}</u>
        <Badge bg="success" style={{marginLeft:"5px"}}>{obj.slice(0, 23)}</Badge>
        <Badge bg="warning" style={{marginLeft:"5px"}}>{obj.slice(23)}</Badge>
        </Nav.Link>
        </Card.Body>
        </Card>
    </>)
}