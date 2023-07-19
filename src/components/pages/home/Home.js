import React from 'react';
import '../../../App.css';
import './Home.css'
import { ImageProfile } from './ImageProfile';
import { NameTag } from './NameTag';
import { ContactCard } from './ContactCard';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <ImageProfile />
    <NameTag/>
    <p className='main'>Hi. My name is Tan Kai Min, Russell. People call me Russell. I am a Computer Science and Mathematics student with 7 years of playing around with tech. In my spare time, I watch movies, read comics and read a good mix of mystery, adventure novels and take long hikes.
    <br/><br/>
    I have general interests in Algorithms, A.I and Machine Learning and Cryptography. My future career goal is to research and build applications which are fun, exciting and useful for others, specifically in trying to bring research software into production.
    </p>
    <ContactCard/>
    <Helmet>
      <title>Tan Kai Min, Russell</title>
      <meta name='description' content='Hi. My name is Tan Kai Min, Russell. People call me Russell. I am a Computer Science and Mathematics student with 7 years of playing around with tech. In my spare time, I watch movies, read comics and a good mix of mystery, adventure novels'/>
    </Helmet>
    <p className='contact'>
      You may find out more about me in 
      <Link to={'/aboutme'} style={{marginLeft:'13px'}}>About Me</Link> or 
      <Link to={'/skills'} style={{marginLeft:'13px'}}>Skills</Link>. 
      I also spend time to do some <Link to={'/software'} style={{marginLeft:'2px'}}>Software and AI</Link>-related projects.
    </p>
    <p className='contact'>
    Feel free to peruse my <Link to={'/blog'} style={{marginLeft:'2px'}}>Blog</Link>. Any opinions stated are solely mine and not necessarily that of the professors, university or even my family and friends.
    </p>
    </>
  );
}