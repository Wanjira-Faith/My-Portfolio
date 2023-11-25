import React from 'react';
import { ImPointRight } from 'react-icons/im';
import '../Css/About.css';

function AboutCard() {
  return (
    <div className="quote-card-view">
      <div className="card-body">
        <blockquote className="blockquote">
          <p>
            My name is Wanjira, a passionate Software Developer based in Nairobi, Kenya. I specialize in crafting cutting-edge solutions and translating imaginative concepts into robust and efficient code.
            <br />
            Throughout my professional journey, I've navigated through a diverse array of challenging projects, elevating my mastery in technologies such as JavaScript, React, Node.js. 
            <br/>   
            My commitment extends beyond conventional standards, ensuring the delivery of software solutions that not only meet but surpass expectations.
            <br />
            I believe in the power of continuous learning and staying abreast of the latest industry trends. Whether it's delving into intricate coding challenges or contributing to open-source projects, I am dedicated to expanding my horizons in the dynamic field of software development.
            <br />
            <br/>   
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Attending Tech events
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;




