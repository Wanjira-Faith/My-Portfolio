import React from "react";
import wanjiraImage from '../assets/Wanjira.jpg';
import { AiOutlineDownload } from 'react-icons/ai';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import '../Css/Resume.css';

function Resume() {
  return (
    <div>
      <Navbar />
      <div className="resume-section">
        <div className="resume-container">
          <img src={wanjiraImage} alt="Wanjira CV" className="resume-image" />
        </div>

        <div className="download-button-container">
          <a href={wanjiraImage} target="_blank" className="download-button">
            <AiOutlineDownload /> &nbsp; Download CV
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;

