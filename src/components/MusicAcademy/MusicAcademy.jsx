import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Courses from './Courses';
import Instructors from './Instructors';
import Footer from './Footer';

const MusicAcademy = () => {
  return (
    <div className="music-academy">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Instructors />
      </main>
      <Footer />
    </div>
  );
};

export default MusicAcademy;
