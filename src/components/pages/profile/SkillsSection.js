import React from "react";
import './Skills.css'
import Row from 'react-bootstrap/Row';
import skills from './skills.json';
import { TechnicalCard } from "./TechnicalCard";

export const SkillsSection = () => {
    var categories = ["Programming Languages", "API, Frameworks and Libraries", "Databases", "Others"];
    return categories.map(
        x => (
          <>
            <h2 style={{marginLeft: '40px', color: 'white', fontFamily:'monospace'}}>{x}</h2>
            <hr style={{color:'white'}}></hr>
            <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-3">
            {skills["Technical"][x].map(
              y => (
                <TechnicalCard name={y.name} proficiency={y.proficiency} category={y.category}/>
              )
            )}
            </Row>
            {true ? <hr style={{color:'white'}}></hr> : <></>}
            
          </>
        )
      )
}