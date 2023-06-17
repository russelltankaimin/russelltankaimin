import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({
    project: {
      description,
      title,
      main,
      category,
      timeline,
      links, status
    },
  }) => {
    return (
    <Card style={{ width: '18rem', margin : "10px 30px 10px 30px" }}>
    <Card.Body>
        <Card.Title>{title}{status}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {Object.keys(links).map(x => <ListGroup.Item>
        {x}
        </ListGroup.Item>)}
      </ListGroup>
      <Card.Body>
        {main}
      </Card.Body>
    </Card>
  
    );
}