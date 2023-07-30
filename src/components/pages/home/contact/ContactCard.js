import React from "react";
import './ContactCard.css'
import Card from 'react-bootstrap/Card';

export default function ContactCard({image_path, redirect_link, name}) {
    return (<>
        <Card  style={{ width: '150px', marginRight:"20px", height: '150px'}}>
        <center>
        <Card.Img variant="top" src={image_path} style={{height:"100px", width:"100px", padding:"10px 10px 1px 10px"}}/>
        
        <Card.Body style={{color:"brown"}}>
            {console.log(name)}
            <Card.Link href={redirect_link} style={{color:"brown", fontSize:"15px"}} className="contact-cardpiece">{name}</Card.Link>
        </Card.Body>
        </center>
        </Card>
    </>)
} 
