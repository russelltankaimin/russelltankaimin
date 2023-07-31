import React from "react";
import './Planner.css';
import plans from './data/plans.json';
import { Row } from "react-bootstrap";
import { ModuleCard } from "./ModuleCard";
import { useMediaQuery } from "react-responsive";

export const PlannerList = () => {

    const years_left = Object.keys(plans);
    const isSmallScreen = useMediaQuery({maxWidth: 576});
    return years_left.map(
        year => (
            <>
            <h2 className="year">{year}</h2>
            {
             (() => {
                let sems_left = Object.keys(plans[year]);
                return sems_left.map(
                    semester => (
                        <>
                        <h3 className="semester"><u>{semester}</u></h3>
                        <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-3" style={!isSmallScreen 
                        ? {margin:"2% 10% 2% 15%"} 
                        : {margin:"1% 20% 10% 1%"}}>
                        {plans[year][semester].map(
                            module => <ModuleCard name={module.name} code={module.code} mc={module.MC} />
                        )}
                        </Row>
                        </>
                    )
                )
             })()   
            }
            <div style={{margin: "2% 15% 2% 15%"}}>
            <hr style={{color:"black", border:"3px solid"}}></hr>
            </div>
            </>
        )
    );

}