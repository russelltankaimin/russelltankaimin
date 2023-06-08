import React from "react";
import dataDict from './merits.json';
import { MeritsCard } from "./MeritsCard";
import { Row } from "react-bootstrap";

export const MeritSection = () => {
    let data = dataDict["Participation History"];
    return (
        <>
            <Row xs={1} md={2} lg={4} xl={4} xxl={4} className="g-3">
            {data.map(x => 
            <MeritsCard name={x.name} years={x.year} awards={x.awards}/>)}
            </Row>
        </>
    );
}