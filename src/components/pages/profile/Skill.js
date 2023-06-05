import React from "react";
import './Skills.css'
import skills_pic from '../images/skills_section_page_image.png'
import { SkillsSection } from "./SkillsSection";
import { PageImage } from "../PageImage";

function Skills() {
  return (
    <>
        <PageImage source={skills_pic} />
        <p style={{color:"white", marginLeft: '40px', marginRight:'40px', marginTop:'40px', marginBottom:'70px', fontSize:'30px', fontFamily:"monospace"}}>
        I have been picking up all these skills throughout my schooling and NS days. I am also constantly trying to update my skills each day to adapt to the dynamic nature of the industry.
        I have also spent time to hone my soft skills as they are very important in being a good team player and it has trained me to be a leader.
        </p>
      <SkillsSection/>
    </>
  )
}

export default Skills;

// return (
//   // <CardGroup>
    
//   // </CardGroup>
//   <p>{skills["Technical"]["Programming Languages"].map(x => x.name)}</p>
// );