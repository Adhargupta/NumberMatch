import React from 'react';

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'Piano & Music Theory',
      experience: '15 Years',
      bio: 'Classical pianist with a passion for teaching'
    },
    {
      id: 2,
      name: 'Michael Davis',
      specialty: 'Guitar & Bass',
      experience: '12 Years',
      bio: 'Professional guitarist and session musician'
    },
    {
      id: 3,
      name: 'Emily Chen',
      specialty: 'Vocal Training',
      experience: '10 Years',
      bio: 'Opera singer and vocal coach'
    },
    {
      id: 4,
      name: 'James Wilson',
      specialty: 'Drums & Percussion',
      experience: '18 Years',
      bio: 'Jazz drummer with extensive touring experience'
    }
  ];

  return (
    <section className="instructors-section" id="instructors">
      <div className="section-header">
        <h2 className="section-title">Meet Our Instructors</h2>
        <p className="section-subtitle">Learn from the best in the industry</p>
      </div>
      <div className="instructors-grid">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="instructor-card">
            <div className="instructor-avatar">
              <div className="avatar-placeholder">
                {instructor.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <h3 className="instructor-name">{instructor.name}</h3>
            <p className="instructor-specialty">{instructor.specialty}</p>
            <p className="instructor-experience">🎓 {instructor.experience} Experience</p>
            <p className="instructor-bio">{instructor.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
