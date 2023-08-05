import React from "react";
import "./Planner.css"
import { Card } from "react-bootstrap";

export const ModuleCard = (props) => {
    return (
        <>
        <Card className="mod_content">
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