import React from "react";
import data from './data/learning_plan.json'
import { Card } from "react-bootstrap";

export const LearningPage = () => {
    const topics = Object.keys(data)
    return topics.map(
        topic => (
            <>
                <p style={{fontSize: "30px", marginLeft: "30px", color:"white"}}>{topic}</p>
                {data[topic].map(
                    y => (
                        <Card className="text-left" style={{marginLeft: "30px", marginRight:"30px", marginBottom:"10px"}}>
                        <Card.Header style={{backgroundColor:"beige"}}>{y.name}</Card.Header>
                        <Card.Text style={{fontSize : "15px", marginLeft:"25px", marginRight:"25px"}}>
                        {y.description}
                        </Card.Text>
                        </Card>
                    )
                )}
                
                
                <hr style={{color:"white"}}></hr>
            </>
        )
    )
}