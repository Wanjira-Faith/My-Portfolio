import React from 'react';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from 'react-icons/di';
import {
  SiFirebase,
  SiPostgresql,
  SiFlask,
} from 'react-icons/si';

function Techstack() {
  return (
    <div className="techstack-container">
      <div className="tech-icons">
        <DiJavascript1 />
      </div>
      <div className="tech-icons">
        <DiNodejs />
      </div>
      <div className="tech-icons">
        <DiReact />
      </div>
      <div className="tech-icons">
        <DiGit />
      </div>
      <div className="tech-icons">
        <SiFirebase />
      </div>
      <div className="tech-icons">
        <SiPostgresql />
      </div>
      <div className="tech-icons">
        <DiPython />
      </div>
      <div className="tech-icons">
        <DiJava />
      </div>
      <div className="tech-icons">
        <SiFlask /> 
      </div>
    </div>
  );
}

export default Techstack;
