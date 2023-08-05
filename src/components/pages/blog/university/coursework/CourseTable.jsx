import React from "react";
import data from "./cw.json";
import { Table } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export const CourseTable = () => {

    const isSmall = useMediaQuery({maxWidth: 576})

    const smallStyle = {
        margin:"2% 15% 2% 15%",
        fontSize : "10px",
        textAlign : "center"
    }

    const normalStyle = {
        margin:"2% 15% 2% 15%",
        fontSize : "20px",
        textAlign : "center"
    }

    return (
            <div style={isSmall ? smallStyle : normalStyle}>
            <Table  striped bordered hover size="md">
                <thead style={{margin:"2% 15% 2% 15%"}}>
                    <tr>
                        <th >Semester</th>
                        <th >Module Code</th>
                        <th style={{}}>Name</th>
                    </tr>
                </thead>
                <tbody style={{}}>
                <style>":</style>
                {Object.entries(data).map(
                    (idx) => (
                    <>
                        {Object.entries(idx[1]).map((coursesInfo) => coursesInfo[0] === "0"
                        ? (
                        <tr>
                        <td rowSpan={idx[1].length}>{idx[0]}</td>
                        <td>{coursesInfo[1]["code"]}</td>
                        <td>{coursesInfo[1]["name"]}</td>
                        </tr>
                        )
                        : (<tr>
                        <td>{coursesInfo[1]["code"]}</td>
                        <td>{coursesInfo[1]["name"]}</td>
                        </tr>))}
                    </>)
                    )}
                </tbody>
                
            </Table>
            </div>
    )

}