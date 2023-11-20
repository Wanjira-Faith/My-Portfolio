import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Navbar from './Navbar';
import Type from './Type';
import '../Css/Home.css';

function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  function handleClick() {
    scroll.scrollTo(0, {
      duration: 500,
      smooth: true,
    });
  }

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="hero-content">
        <div className='svg'>
          <Link to="hero-content" smooth={true} duration={500} onClick={handleClick}>
          </Link>
        </div>
        <div className={`content-group ${animate ? 'move-in' : 'move-off-screen'}`}>
          <h1 id="name">Hi There!{" "} 
           <span id="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span></h1>    
          <h1 className="heading-name">
            I'm
            <strong className="main-name"> Wanjira Faith</strong>
          </h1>
          <div style={{ padding: 10, textAlign: "left", fontSize: "1.5rem" }}>
                <Type />
              </div>
        
        </div>
      </div>
    </div>
  );
}

export default Home;
