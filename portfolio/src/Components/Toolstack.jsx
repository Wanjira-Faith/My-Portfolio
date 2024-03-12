import React from 'react';
import { SiNetlify, SiRender} from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiVisualstudiocode, SiPostman, SiSlack, SiVercel } from 'react-icons/si';

function Toolstack() {
  return (
    <div className="toolstack-container">
      <div className="tech-icons">
        <SiRender />
      </div>
      <div className="tech-icons">
        <SiVisualstudiocode />
      </div>
      <div className="tech-icons">
        <SiPostman />
      </div>
      <div className="tech-icons">
        <SiNetlify />
      </div>
      <div className="tech-icons">
        <SiVercel />
      </div>
      <div className="tech-icons">
        <SiGithub/>
      </div>
    </div>
  );
}

export default Toolstack;
