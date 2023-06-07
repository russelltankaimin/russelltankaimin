import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import '../Portfolio.css'
import dataDict from './timeline.json';
import { TimelineCard } from "./TimelineCard";

export const TimelineTree = () => {
    let data = dataDict["Timeline"];
    return (
        <MDBContainer fluid className="py-5" style={{ backgroundColor: "rgb(55, 53, 53)" }}>
        <div className="main-timeline-2">
        {
            data.map((x, index) => <TimelineCard 
            orientation={index % 2 === 0 ? 'left' : 'right'} 
            title={x.title} 
            period={x.period}
            content={x.content}
            />)
        }
        </div>
        </MDBContainer>
  );
}