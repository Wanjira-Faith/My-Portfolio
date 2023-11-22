import React from "react";
import ProjectCard from "./ProjectCard";
import eventImg from '../assets/event.jpg';
import powerImg from '../assets/power.jpg';
import robotImg from '../assets/robot.jpg';
import globalImg from '../assets/global.jpg';
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../Css/Projects.css';

function Projects() {
  return (
    <div>
      <Navbar />
      <div className="project-section">
         <div className="project-heading"> 
            <h1>
            My Recent Works
          </h1>
          <p>
            Here are a few projects I've worked on recently.
          </p>
          </div>
          <div className="row">
            <ProjectCard
              imgPath={eventImg}
              title="EventHub"
              description="EventHub is a dynamic, web-based event management application designed to revolutionize event creation, management, and attendance. Employing React on the frontend and Flask on the backend, this application seamlessly combines innovation with robust technology. It provides a user-friendly environment for effortless user registration, intuitive event creation, browsing functionalities, and secure authentication."
              ghLink="https://github.com/LKiok/Occasional-sync-frontend"
              demoLink="https://nimble-strudel-d6a22b.netlify.app/"
            />

            <ProjectCard
              imgPath={powerImg}
              title="SuperHeroes"
              description="Superheroes is a comprehensive Database and API, providing users with a robust solution for effortlessly managing and accessing information about their favorite superheroes and their extraordinary powers. This user-friendly platform enables seamless creation, exploration, and updating details on superheroes, their incredible abilities, and power levels."
              ghLink="https://github.com/Wanjira-Faith/flask-superheroes-codechallenge2"
              demoLink=""
            />
             <ProjectCard
              imgPath={globalImg}
              title="Global Wonder"
              description="Global Wander unveils an innovative Airbnb app crafted with ReactJS to revolutionize travel planning.  With advanced API integration and seamless data fetching, our platform offers a user-centric experience for simplified journey planning and accommodation booking. Explore diverse destinations, discover dream stays, and engage with real-time data—all powered by the dynamic capabilities of ReactJS." 
              ghLink="https://github.com/KIPROTYCH/phase2-GroupB-Project"
              demoLink="https://phase2-group-b-project.vercel.app/"
            />

            <ProjectCard
              imgPath={robotImg}
              title="Bot Battlr"
              description="Bot Battlr App is a user-friendly web application crafted with React, offering you a straightforward platform to create and manage your own army of bots. With an easy-to-navigate interface, users can effortlessly browse through a variety of bots, add them to their collection, and remove them when needed. The app is designed for simplicity, allowing you to enjoy the experience of building and customizing your bot army hassle-free."
              ghLink="https://github.com/Wanjira-Faith/bot-battlr-app"
              demoLink=""
            />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
