import React from "react";
import { Card } from "react-bootstrap";

export const ModuleCard = (props) => {
    return (
        <>
        <Card style={{ width: '18rem' , marginLeft: '40px', marginRight: '10px', borderColor:'orange'
        , borderWidth:'10px', fontFamily:'monospace'}}>
            <Card.Body>
            <Card.Title style={{fontWeight:"bold", fontSize:"20px"}}>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><em>{props.code}</em></Card.Subtitle>
            <Card.Text>
            {props.mc + " MCs"}
            </Card.Text>
      </Card.Body>
      </Card>
     </>
    );
}