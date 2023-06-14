import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBIcon,
  } from "mdb-react-ui-kit";
import '../Portfolio.css';

export const TimelineCard = (props) => {
    return (
        <div className={`timeline-2 ${props.orientation}-2`}>
              <MDBCard style={{borderColor:"orange", borderWidth:"10px"}}>
                <MDBCardBody className="p-4">
                  <h4 className="fw-bold mb-4">{props.title}</h4>
                  <p className="text-muted mb-4">
                    <MDBIcon far icon="clock" />{props.period}
                  </p>
                  <p className="mb-0">
                    {props.content}
                  </p>
                </MDBCardBody>
              </MDBCard>
            </div>
    );
}