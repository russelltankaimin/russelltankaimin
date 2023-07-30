import React from "react";
import ContactCard from "./ContactCard";
import { Row } from "react-bootstrap";
import './ContactMe.css'

const links = [
    {
        "name" : "Github",
        "link" : "https://github.com/russelltankaimin",
        "pic" : "./img/github.png"

    },
    {
        "name" : "Linkedin",
        "link" : "https://www.linkedin.com/in/tan-kai-min-russell-b23751128/",
        "pic" : "./img/linkedin.png"
    },
    {
        "name" : "Email",
        "link" : "e0725120@u.nus.edu",
        "pic" : "./img/email.png"
    },
    {
        "name" : "Kattis",
        "link" : "https://open.kattis.com/users/russell-tan",
        "pic" : "./img/kattis.png"
    },
    {
        "name" : "Instagram",
        "link" : "https://www.instagram.com/russell_russell_russell_tan/",
        "pic" : "./img/instagram.png"
    }
]

export const ContactMe = () => <>
    <h2 className="contact_header">Find Me Here</h2>
    <Row xs={1} md={2} className="g-4" style={{margin:"1% 15% 1% 15%"}}>
    {links.map((bulk) => { 
        return <ContactCard image_path={bulk["pic"]} redirect_link={bulk["link"]} name={bulk["name"]} />
    }
    )}
    </Row>
</>