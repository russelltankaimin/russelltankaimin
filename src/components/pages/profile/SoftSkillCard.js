import React from "react";
import { Card } from "react-bootstrap";

export const SoftSkilLCard = (props) => {
    return (
        <>
        <Card style={{ width: '18rem' , marginLeft: '40px', marginRight: '10px', borderColor:'orange'
        , borderWidth:'10px', fontFamily:'monospace'}}>
            <Card.Body>
            <Card.Title style={{fontWeight:"bold"}}>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Soft skills</Card.Subtitle>
            <Card.Text>
            {props.desc}
            </Card.Text>
        </Card.Body>
        </Card>
        </>
    );
}