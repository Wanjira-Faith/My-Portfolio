import React from "react";
import '../Css/Projects.css';

function ProjectCard(props) {
  return (
    <div className="project-card-view">
      <img src={props.imgPath} alt="card-img" className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>
        <div className="project-buttons">
          <a href={props.ghLink} target="_blank" className="project-button">
            <i className="fa fa-github"></i> GitHub
          </a>
          {props.demoLink && (
            <a href={props.demoLink} target="_blank" className="project-button">
              <i className="fas fa-link"></i> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
