import React from "react";
import { Badge, Button, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../blog/interests/components/BlogIntroCard.css'; // steal the same CSS

export const NoteCard = ({
    note: {
      description,
      title,
      createdAt,
      category,
      id,
    },
  }) => {
    return (
        <>
        <Card>
        <Card.Body>
        <Card.Title>{title}
        <Badge bg="success" style={{marginLeft:"5px"}}>{"#" + category}</Badge>
        </Card.Title>
        <Card.Text>
        <em>{description}</em>
        </Card.Text>
        <div className="row-wise">
        <p>Published: {createdAt}</p>
        <Button variant="primary">
            <Nav.Link as={Link} to={`/notes/${id}`}>
                Read
            </Nav.Link>
        </Button>
        </div>
        </Card.Body>
        </Card>
        </>
    )
}