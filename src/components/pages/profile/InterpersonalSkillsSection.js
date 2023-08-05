import React from "react";
import skills from './skills.json';
import Row from 'react-bootstrap/Row';
import { SoftSkilLCard } from "./SoftSkillCard";
import './Skills.css'
import { useMediaQuery } from "react-responsive";

export const InterpersonalSkillsSection = (props) => {
    const isSmallScreen = useMediaQuery({maxWidth: 576});
    return (
        <>
        <h2 className="category"><u>Interpersonal</u></h2>
        <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-3"
        style={!isSmallScreen 
            ? {margin:"2% 10% 2% 15%"} 
            : {margin:"1% 20% 10% 1%"}}
        >
        {skills["Soft"].map(
        x => (<SoftSkilLCard name={x.name} desc={x.desc}/>))}
        </Row>
        </>
        )
}