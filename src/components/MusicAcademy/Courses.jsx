import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Piano Lessons',
      description: 'Master the piano with our comprehensive course for all skill levels',
      duration: '12 Weeks',
      level: 'Beginner to Advanced',
      icon: '🎹'
    },
    {
      id: 2,
      title: 'Guitar Mastery',
      description: 'Learn acoustic and electric guitar techniques from the basics',
      duration: '10 Weeks',
      level: 'All Levels',
      icon: '🎸'
    },
    {
      id: 3,
      title: 'Vocal Training',
      description: 'Develop your voice and singing technique with professional guidance',
      duration: '8 Weeks',
      level: 'Beginner to Intermediate',
      icon: '🎤'
    },
    {
      id: 4,
      title: 'Drums & Percussion',
      description: 'Build rhythm and coordination with our expert drum instructors',
      duration: '12 Weeks',
      level: 'All Levels',
      icon: '🥁'
    },
    {
      id: 5,
      title: 'Music Theory',
      description: 'Understand the fundamentals of music composition and notation',
      duration: '6 Weeks',
      level: 'Beginner',
      icon: '🎼'
    },
    {
      id: 6,
      title: 'Violin Classes',
      description: 'Classical and contemporary violin techniques for aspiring musicians',
      duration: '14 Weeks',
      level: 'Beginner to Advanced',
      icon: '🎻'
    }
  ];

  return (
    <section className="courses-section" id="courses">
      <div className="section-header">
        <h2 className="section-title">Our Courses</h2>
        <p className="section-subtitle">Choose from our wide range of music programs</p>
      </div>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-icon">{course.icon}</div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-info">
              <span className="course-duration">📅 {course.duration}</span>
              <span className="course-level">📊 {course.level}</span>
            </div>
            <button className="course-button">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
