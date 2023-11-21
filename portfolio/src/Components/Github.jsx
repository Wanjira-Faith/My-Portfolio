import React from 'react';
import GitHubCalendar from 'react-github-calendar';

function Github() {
  return (
    <div className="github-container">
      <h1 className="project-heading">Days I Code</h1>
      <GitHubCalendar
        username="Wanjira-Faith"
        blockSize={16}
        blockMargin={6}
        theme={{
          dark: ['#1A1A1A', '#4C8783', '#76BDBB', '#1A8995', '#489CA8'],
        }}          
        fontSize={15}
      />
    </div>
  );
}

export default Github;

