import React from "react";
import skills from './skills.json';
import Row from 'react-bootstrap/Row';
import { SoftSkilLCard } from "./SoftSkillCard";

export const InterpersonalSkillsSection = (props) => {
    return (
        <>
        <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-3">
        {skills["Soft"].map(
        x => (<SoftSkilLCard name={x.name} desc={x.desc}/>))}
        </Row>
        </>
        )
}