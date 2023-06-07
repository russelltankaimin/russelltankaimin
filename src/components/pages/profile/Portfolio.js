import React from "react";
import './Portfolio.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { TimelineTree } from "./timeline/TimelineTree";
import { TabPane } from "react-bootstrap";

export const Portfolio = () => {
  //let tabs = ["Merits", "Experience"]; // Add more to fill up more! - Russell
  return (
    <>
    <p style={{color:"white", marginLeft: '40px', marginRight:'40px', marginTop:'40px', marginBottom:'40px', fontSize:'30px', fontFamily:"monospace"}}>
    You can see my recent experience and achievements throughout my schooling days. Do note that these are only a few highlights which I have selected.    
    </p>
    <Tabs
      defaultActiveKey="merits"
      id="left-tabs-example"
      className="mb-3"
      style={{fontSize : "40px", backgroundColor : "grey", marginTop : '0%', fontFamily:"monospace", fontWeight:"bolder"}}
    >
    <Tab eventKey="merits" title="Merits" className="color-white">
      <h1 style={{color:"white"}}>This is still under construction! -- Russell</h1>
    </Tab>
    <TabPane eventKey="experience" title="Experience" className="color-white">
      <TimelineTree />
    </TabPane>
    <TabPane eventKey="coming soon" title="Coming Soon ..." disabled>
    </TabPane>
    </Tabs>
    </>
  );
    
}