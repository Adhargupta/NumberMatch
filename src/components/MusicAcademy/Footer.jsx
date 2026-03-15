import React from 'react';

const Footer = () => {
  return (
    <footer className="music-footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Music Academy</h3>
          <p className="footer-text">
            Empowering musicians of all levels to achieve their dreams
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#instructors">Instructors</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>📧 info@musicacademy.com</li>
            <li>📞 (555) 123-4567</li>
            <li>📍 123 Music Street, NY 10001</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Music Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
