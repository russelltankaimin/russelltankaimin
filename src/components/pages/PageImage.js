import React from "react";
import Image from 'react-bootstrap/Image'
import './PageImage.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const PageImage = (props) => {
    return (
        <Image src={props.source} fluid className={"rounded mx-auto d-block "+ props.filter} style={{width:'240px', height:'240px', color:'white'}}/>
    );
}