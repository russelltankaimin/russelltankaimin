import React from "react";
import './Skills.css'
import Row from 'react-bootstrap/Row';
import skills from './skills.json';
import { useMediaQuery } from "react-responsive";
import { TechnicalCard } from "./TechnicalCard";

export const SkillsSection = () => {
    var categories = ["Programming Languages", "API, Frameworks and Libraries", "Databases", "Others"];
    const isSmallScreen = useMediaQuery({maxWidth: 576});
    return categories.map(
        x => (
          <>
            <h2 className="category"><u>{x}</u></h2>
            <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-3"
            style={!isSmallScreen 
            ? {margin:"2% 10% 2% 15%"} 
            : {margin:"1% 20% 10% 1%"}}
            >
            {skills["Technical"][x].map(
              y => (
                <TechnicalCard name={y.name} proficiency={y.proficiency} category={y.category}/>
              )
            )}
            </Row>
          </>
        )
      )
}