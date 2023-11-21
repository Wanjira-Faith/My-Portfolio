import React from 'react';
import '../Css/Footer.css';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copywright">
          <h3>Designed and Developed by Wanjira Faith</h3>
        </div>
        <div className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </div>
        <div className="footer-socials">
          <ul>
            <li>
              <a href="https://github.com/Wanjira-Faith" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/wanjiraq" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/wanjira-njuguna-8997a3256" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
