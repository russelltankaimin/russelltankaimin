import React from "react";
import Latex from "react-latex";
import { PageImage } from "../PageImage";
import picture from './img/notebook.png';
import './NotesLandingPage.css';

export const NotesLandingPage = () => {
    const a = `$$T_{Q}$$`;
    return <>
        <PageImage source={picture}/>
        <h1 className="notes_header"><u>My Notes</u></h1>
        <p className="notes_intro">
            Here contains some of the notes that I have made over the years. I hope the material is helpful
            to those who chance upon this page. It will mostly be Computing and Maths related, but there might
            be a bit of others since I might be taking other types of classes in NUS.
        </p>
        <Latex displayMode={true}>{a}</Latex>
        {/* {<Latex displayMode={true}>$(3\times 4) \div (5-3) \in T__(Q^2)$</Latex>} */}
    </>
}