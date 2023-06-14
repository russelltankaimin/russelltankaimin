import React from "react";
import Image from 'react-bootstrap/Image';
import profilePic from '../images/russellcambridge.jpeg'
import '../home/ImageProfile.css'

export const ImageProfile = () => {
    return (
        <Image src={profilePic} fluid className="rounded mx-auto d-block" id="image_profile"/>
    );
}