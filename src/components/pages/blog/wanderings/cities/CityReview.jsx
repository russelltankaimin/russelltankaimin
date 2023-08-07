import React from "react";
import { Badge, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CityReviewCard = ({
    slug, country, continent, description, cityname
}) => {
    const URL = slug
    console.log("CITYNAME",cityname);
    return (<div>
        <Card>
        <Card.Body style={{width:"fit-content"}}>
        <Nav.Link as={Link} to={`/blog/travels/${URL}`}
                state={{
                cityname : cityname,
                description: description,
                country : country,
                continent : continent
                }}>
        <u>{cityname}</u>
        <Badge bg="primary" style={{marginLeft:"5px"}}>{country}</Badge>
        </Nav.Link>
        </Card.Body>
        </Card>
    </div>)
}