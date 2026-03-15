import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Learn Music With
          <span className="hero-highlight"> Passion</span>
        </h1>
        <p className="hero-description">
          Unlock your musical potential with expert instructors and comprehensive courses
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Get Started</button>
          <button className="hero-btn secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="music-icon-container">
          <div className="music-note note-1">♪</div>
          <div className="music-note note-2">♫</div>
          <div className="music-note note-3">♪</div>
          <div className="music-note note-4">♫</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
