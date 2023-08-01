import React from "react";
import './BackButton.css';
import { Card, CardGroup, Nav } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export const BackButton = ({redirect_link, description}) => {
    const isSmallScreen = useMediaQuery({maxWidth: 576})
return (<>
    <CardGroup style={ !isSmallScreen 
    ? {margin:"2% 10% 2% 15%"} 
    : {margin:"1% 10% 10% 10%"}}>
        <Card className="redirector">
            <Card.Body>
                <Card.Title>
                    <Nav.Link as={Link} to={redirect_link}>{description}</Nav.Link>
                </Card.Title>
            </Card.Body>
        </Card>
    </CardGroup>
</>)
}