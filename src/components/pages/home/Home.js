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
    <p class='main'>Hi. My name is Tan Kai Min, Russell. People call me Russell. I am a Computer Science and Mathematics student with 7 years of playing around with tech. In my spare time, I watch movies, read comics and read a good mix of mystery, adventure novels and take long hikes.
    <br/><br/>
    I am an aspiring computer scientist with a wide variety of interests like Algorithms, Machine Learning and Cryptanalysis, especially in privacy preserving
      technologies. Also, I am always looking out for opportunities to learn new tech and apply them to solve hard problems. I am able to design software, write research
      code to test hypothesis and apt in solving real world problems. I am also interested in mathematical algorithms which help optimise processes for business processes too.
      My career goal is to accelerate integration of research software (like SageMath or SAT Solvers) to modern software as I believe in their potential to help us deliver better and more!
    </p>
    <ContactCard/>
    <Helmet>
      <title>Tan Kai Min, Russell</title>
      <meta name='description' content='Hi. My name is Tan Kai Min, Russell. People call me Russell. I am a Computer Science and Mathematics student with 7 years of playing around with tech. In my spare time, I watch movies, read comics and read a good mix of mystery, adventure novels'/>
    </Helmet>
    <p class='contact'>
      You may find out more about me in 
      <Link to={'/portfolio'} style={{marginLeft:'13px'}}>About Me</Link> or 
      <Link to={'/skills'} style={{marginLeft:'13px'}}>Skills</Link>
    </p>
    <p class='contact'>
    Feel free to peruse my <a href='/blog'>blog</a>. Any opinions stated are solely mine and not necessarily that of the professors, university or even my family and friends.
    </p>
    </>
  );
}