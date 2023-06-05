import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

export const TechnicalCard = (props) => {
    return (
        <>
        <Card style={{ width: '18rem' , marginLeft: '40px', marginRight: '10px', borderColor:'orange'
        , borderWidth:'10px', fontFamily:'monospace'}}>
            <Card.Body>
            <Card.Title style={{fontWeight:"bold"}}>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Technical</Card.Subtitle>
            <Card.Text>
            Proficiency : {"★".repeat(props.proficiency)}
            </Card.Text>
      </Card.Body>
    </Card>
    </>
    );
}