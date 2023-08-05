import React from "react";

export const BlockQuote = ({content}) => {
    return <blockquote className="blockquote mb-3" style={{fontSize:"20px"}}>
        {' '}
        <hr style={{color:"black", border:"3px solid"}}></hr>
        <em>{content}</em>
        <hr style={{color:"black", border:"3px solid"}}></hr>
        {' '}
        </blockquote>
}