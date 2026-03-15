import React from 'react';

const Header = () => {
  return (
    <header className="music-header">
      <div className="header-container">
        <div className="logo">
          <h1 className="logo-text">Music Academy</h1>
        </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#courses" className="nav-link">Courses</a>
          <a href="#instructors" className="nav-link">Instructors</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button className="enroll-button">Enroll Now</button>
      </div>
    </header>
  );
};

export default Header;
