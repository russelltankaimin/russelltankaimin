import React from "react";
import data from './data/learning_plan.json'
import { Card } from "react-bootstrap";

export const LearningItems = () => {
    const topics = Object.keys(data)
    return topics.map(
        topic => (
            <>
                <p className="category_title"><u>{topic}</u></p>
                {data[topic].map(
                    y => (
                        <Card className="text-left card">
                        <Card.Header style={{backgroundColor:"#E6C7D8"}}>{y.name}</Card.Header>
                        <Card.Text className="card_text">
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