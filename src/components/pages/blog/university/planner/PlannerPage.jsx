import React from "react";
import plans from './data/plans.json';
import { Row } from "react-bootstrap";
import { ModuleCard } from "./ModuleCard";

export const PlannerPage = () => {
    console.log(Object.keys(plans))
    const years_left = Object.keys(plans);
    return years_left.map(
        year => (
            <>
            <h2 style={{marginLeft: '40px', color: 'white', fontFamily:'monospace', marginTop:"20px"}}>{year}</h2>
            <hr style={{color:'white'}}></hr>
            {
             (() => {
                let sems_left = Object.keys(plans[year]);
                return sems_left.map(
                    semester => (
                        <>
                        <h3 style={{marginLeft: '40px', color: 'white', fontFamily:'monospace', marginTop:"20px", marginBottom:"20px"}}>{semester}</h3>
                        <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-3">
                        {plans[year][semester].map(
                            module => <ModuleCard name={module.name} code={module.code} mc={module.MC} />
                        )}
                        </Row>
                        </>
                    )
                )
             })()    
            }
            </>
        )
    );

}