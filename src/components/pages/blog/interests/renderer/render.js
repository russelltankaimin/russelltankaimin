import React from "react";

export const GeneratedBlogContent = ({jsonObject}) => {
    return (
        <div style={{margin: "2% 15% 1% 15%"}}>  
            {jsonObject.map(
                obj => {
                    switch(obj["tag"]) {
                        case "h2":
                            return <h2>{obj["content"]}</h2>
                        case "h3":
                            return <h3>{obj["content"]}</h3>
                        case "p":
                            return <p>{obj["content"]}</p>
                        case "blockquote":
                            return <blockquote className="blockquote mb-3" style={{fontSize:"20px"}}>
                            {' '}
                            <hr style={{color:"black", border:"3px solid"}}></hr>
                            <em>{obj["content"]}</em>
                            <hr style={{color:"black", border:"3px solid"}}></hr>
                            {' '}
                            </blockquote>
                        case "br":
                            return <br></br>
                        default:
                            return <p>{obj["content"]}</p>
                    }
                }
            )}
        </div>
    );
}