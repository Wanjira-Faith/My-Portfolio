import React from 'react';
import Navbar from './Navbar'; 
import AboutCard from './AboutCard';
import Footer from './Footer';
import laptopImg from '../assets/about.jpg';
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import Github from './Github';
import '../Css/About.css';

function About() {
  return (
    <>
      <Navbar /> 
      <div className="about-section">
        <div className="about-container">
          <div className="about-section-header">
            <div className="about-text">
              <h1>Learn About Me</h1>
              <AboutCard />
            </div>
            <div className="about-img">
              <img src={laptopImg} alt="about" className="img-fluid" />
            </div>
          </div>
          <div className="professional-skillset">
            <h1>Professional Skillset</h1>
            <Techstack />
          </div>
          <div className="tools-used">
            <h1>Tools I use</h1>
            <Toolstack />
          </div>
          <Github />
        </div>
      </div>
      <Footer /> 
    </>
  );
}

export default About;




