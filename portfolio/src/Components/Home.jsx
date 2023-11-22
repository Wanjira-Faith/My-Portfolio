import React from 'react';
import Navbar from './Navbar';
import HomeImg from '../assets/home.png';
import Type from './Type';
import '../Css/Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero-content">
        <div className='mask'>
          <img className='home-img' src={HomeImg} alt='homeimg' />
        </div>
        <div className="content-group">
          <h1 id="name">Hi There!{' '}
            <span id="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="heading-name">
            I'm
            <strong className="main-name"> Wanjira Faith</strong>
          </h1>
          <div style={{ padding: 10, textAlign: 'left', fontSize: '1.5rem' }}>
            <Type />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

