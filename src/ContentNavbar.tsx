import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const ContentNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a 
        href="#/" 
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }} 
        className="navbar-brand"
      >
        Monica Ashley Laviste
      </a>
      
      <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        {/* <li>
          <Link to="/book">Book</Link>
        </li> */}
        {/* <li>
          <Link to="/articles">Articles</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default ContentNavbar;