import React from "react";
import './Skills.css'
import skills_pic from '../images/skills.png'
import { SkillsSection } from "./SkillsSection";
import { PageImage } from "../PageImage";
import { InterpersonalSkillsSection } from "./InterpersonalSkillsSection";
import { BackButton } from "../../backbutton/BackButton";

function Skills() {
  return (
    <>
        <PageImage source={skills_pic} />
        <h1 className="header_skills"><u>My Skills</u></h1>
        <p className="header_intro">
        I have been picking up all these skills throughout my schooling and NS days. I am also constantly trying to update my skills each day to adapt to the dynamic nature of the industry.
        I have also spent time to hone my soft skills as they are very important in being a good team player and it has trained me to be a leader.
        </p>
      <SkillsSection/>
      <InterpersonalSkillsSection/>
      <div style={{margin: "2% 15% 2% 15%" }}>
      <BackButton description={"Back to About Me Page"} redirect_link={'/aboutme'} />
      </div>
    </>
  )
}

export default Skills;

// return (
//   // <CardGroup>
    
//   // </CardGroup>
//   <p>{skills["Technical"]["Programming Languages"].map(x => x.name)}</p>
// );