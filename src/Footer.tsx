import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Footer: React.FC = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact</h3>
          <p>mrlaviste@up.edu.ph</p>
          <p>+63 915 215 7149</p>
          <p>Quezon City, Philippines</p>
        </div>
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/book">Book</Link></li>
            <li><Link to="/articles">Articles</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Monica Ashley Laviste. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;