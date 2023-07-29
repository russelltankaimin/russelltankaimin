import React from "react";
import data from "./cw.json";
import { Table } from "react-bootstrap";

export const CourseWork = () => {

    return (
            <Table  striped bordered hover size="md" style={{padding:"10px 10px 10px 10px", textAlign:"center"}}>
                <thead>
                    <tr>
                        <th style={{width:"20%"}}>Semester</th>
                        <th style={{width:"20%"}}>Module Code</th>
                        <th style={{width:"20%"}}>Name</th>
                    </tr>
                </thead>
                <tbody>
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
    )

}