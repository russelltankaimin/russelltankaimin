import React from 'react';
import '../../../App.css';
import './Home.css'
import { ImageProfile } from './ImageProfile';
import { NameTag } from './NameTag';
import { Helmet } from 'react-helmet';
import { ContactMe } from './contact/ContactMe';
import { CardGroup, Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const links = [
  {
      "link":'/aboutme/',
      "name": 'About Me'
  },
  {
      "link":'/blog/',
      "name": 'Blog'
  },
  {
      "link":'/software',
      "name": 'Projects'
  },
  {
    "link":'/notes',
    "name": 'Notes'
}
];

export default function Home() {
  return (
    <>
    <ImageProfile />
    <NameTag/>
    <p className='main'>I am a Computer Science and Mathematics Double Degree Programme (DDP) student at the National University of Singapore (NUS) with 7 years of playing around with tech. In my spare time, I watch movies, read comics and a good mix of mystery, adventure novels and take long hikes.
    <br/><br/>
    I have general interests in Algorithms, A.I and Machine Learning and its applications to Cryptography. My future career goal is to research and build applications which are fun, exciting and useful for others, specifically in trying to bring research software into production.
    </p>
    <Helmet>
      <title>Tan Kai Min, Russell</title>
      <link rel="canonical" href='/'/>
      <meta name='description' content='Hi. My name is Tan Kai Min, Russell from Singapore. I am a Computer Science and Mathematics Double Degree Programme (DDP) student at the National University of Singapore (NUS) with 7 years of playing around with tech.'/>
    </Helmet>
    <h2 className="contact_header"><u>Links In This Site</u></h2>
    <center style={{marginTop : "20px"}}>
    <CardGroup style={{margin:"2% 15% 2% 15%"}}>
        {links.map((bulk, index) => 
        <div style={{marginLeft:"2%", marginRight:"2%", marginBottom:"2%"}}>
        <Card className="redirector">
        <Card.Body>
            <Card.Title>
            <Nav.Link as={Link} to={bulk["link"]}>{bulk["name"]}</Nav.Link>
            </Card.Title>
            </Card.Body>
        </Card>
        </div>)}
    </CardGroup>
    </center>
    <ContactMe />
    </>
  );
}