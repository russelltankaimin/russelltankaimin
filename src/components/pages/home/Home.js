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
    <ImageProfile></ImageProfile>
    <NameTag></NameTag>
    <p id='main'>Hi. My name is Tan Kai Min, Russell. People call me Russell. I am a Computer Science and Mathematics student with 7 years of playing around with tech. In my spare time, I watch movies, read comics and read a good mix of mystery, adventure novels</p>
    <ContactCard></ContactCard>
    <Helmet>
      <title>Tan Kai Min, Russell</title>
      <meta name='description' content='Hi. My name is Tan Kai Min, Russell. People call me Russell. I am a Computer Science and Mathematics student with 7 years of playing around with tech. In my spare time, I watch movies, read comics and read a good mix of mystery, adventure novels'/>
    </Helmet>
    <p>
      You may find out more about me in
      <Link to='/portfolio'>About Me</Link> or 
      <Link to='/skills'>Skills</Link>
    </p>
    </>
  );
}