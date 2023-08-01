import React from "react";
import { Card, Badge} from "react-bootstrap";
import ModalProject from "./ModalProject";

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
    <Card style={{width:"15rem", marginTop:"10px", marginBottom:"10px", borderColor:"orange", borderWidth:"10px"}}>
    <Card.Body>
        <Card.Title>{title}
        <Badge bg={status === 'Pending' ? "danger" : (status === "Completed" ? "success" : "secondary")}
        style={{marginLeft : "10px", marginRight:"10px"}}>{status}</Badge>
        </Card.Title>
        <Card.Text>
        {timeline}
        </Card.Text>
        <Card.Text>
        <em>{description}</em>
        <hr></hr>
        <ModalProject title={title} main={main} tags={category}/>
        </Card.Text>
        <hr></hr>
        <Card.Text>
          {Object.keys(links).map(x => (<Card.Link href={links[x]} style={{color:"black"}}>{x}</Card.Link>))}
          {category.length > 0 ? <hr></hr> : <></>}
            {category.map(x => <Badge bg="dark" style={{margin:"3px 1px 3px 3px"}} text="light">{x}</Badge>)}
        </Card.Text>
    </Card.Body>
    </Card>
  
    );
}