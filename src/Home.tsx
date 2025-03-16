import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import protect from './assets/protect.png'
import articles from './assets/articles.jpg'
import oneDiliman from './assets/OneDiliman.png'

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [typing, setTyping] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Front End Developer | Content Writer | SEO Specialist";
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    if (typing) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setTyping(false);
        const timeout = setTimeout(() => {
          setTyping(true);
          setText("");
        }, 10000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, typing]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Home">
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
            <a 
              href="#/" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#/" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#/" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#/" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#/" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('education');
              }}
            >
              Education
            </a>
          </li>
        </ul>
      </nav>

      <header id="home" className="hero-section" style={{ 
        backgroundPosition: `center ${scrollPosition * 0.4}px` 
      }}>
        <div className="animated-background">
          <div className="design-element design-circle"></div>
          <div className="design-element design-square"></div>
          <div className="design-element design-triangle"></div>
          <div className="design-element design-dots"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="animated-title">Monica Ashley Laviste</h1>
            <h2 className="typing-text">{text}<span className="cursor">|</span></h2>
            <p className="hero-description">
              Dynamic professional with expertise in front-end development, content creation,
              and search engine optimization. Based in Quezon City, Philippines.
            </p>
            <div className="hero-contact">
              <p>mrlaviste@up.edu.ph</p>
              <p>+63 915 215 7149</p>
            </div>
            <a 
              href="#/" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }} 
              className="btn-primary"
            >
              Learn More
            </a>
          </div>
          <div className="hero-visual">
            <div className="code-snippet">
              <div className="code-line"><span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;</div>
              <div className="code-line indent"><span className="code-property">name</span>: <span className="code-string">'Monica Ashley Laviste'</span>,</div>
              <div className="code-line indent"><span className="code-property">skills</span>: [<span className="code-string">'React'</span>, <span className="code-string">'CSS'</span>, <span className="code-string">'TypeScript'</span>],</div>
              <div className="code-line indent"><span className="code-property">passion</span>: <span className="code-string">'Creating elegant solutions'</span></div>
              <div className="code-line">&#125;;</div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="about-section">
        <div className="about-wrapper">
          <h2>About Me</h2>
          <div className="about-container">
            <div className="about-text">
              <p>
                I'm a dynamic Front End Developer, Content Writer, and SEO Specialist with a proven track 
                record at Digital Press LLC. Skilled in creating web designs, producing 
                SEO-optimized content, and programming with C or python.
              </p>
              <p>
                Currently pursuing a Bachelor of Science in Computer Science at the University of The Philippines Diliman 
                while working professionally in a content creation role.
              </p>
            </div>
            
            <div className="skills-section">
              <div className="skills-row">
                <div className="skills-column">
                  <h3>Technical Skills</h3>
                  <div className="skills-grid">
                    <div className="skill-item">React</div>
                    <div className="skill-item">CSS</div>
                    <div className="skill-item">TypeScript</div>
                    <div className="skill-item">Python</div>
                    <div className="skill-item">C</div>
                    <div className="skill-item">Firebase</div>
                    <div className="skill-item">SQL</div>
                  </div>
                </div>
                
                <div className="skills-column">
                  <h3>Professional Skills</h3>
                  <div className="skills-grid">
                    <div className="skill-item">Testing & Debugging</div>
                    <div className="skill-item">Project Management</div>
                    <div className="skill-item">OOP</div>
                    <div className="skill-item">SEO</div>
                    <div className="skill-item">Content Creation</div>
                    <div className="skill-item">Creative Writing</div>
                    <div className="skill-item">Deadline Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          <div className="experience-card">
            <div className="experience-header">
              <h3>Front End Developer</h3>
              <p className="company">OneDiliman (Project)</p>
              <p className="duration">January 2025 - Present</p>
            </div>
            <div className="experience-details">
              <p>Utilized React, CSS, and TypeScript to create visually appealing and responsive web pages that met client requirements.</p>
              <p>Collaborated with back-end developers to improve website functionality and integrate features.</p>
              <p>Used Firebase for project data management and authentication systems.</p>
            </div>
          </div>
          
          <div className="experience-card">
            <div className="experience-header">
              <h3>Content Writer</h3>
              <p className="company">Digital Press LLC</p>
              <p className="duration">April 2023 - Present</p>
            </div>
            <div className="experience-details">
              <p>Completed thorough research into assigned topics and produced high-quality content for various clients.</p>
              <p>Proved successful working within tight deadlines and a fast-paced environment.</p>
              <p>Utilized exceptional writing, editing, and proofreading skills to produce engaging and error-free content.</p>
              <p>Leveraged AI in creating quality long-form content by using effective prompts.</p>
            </div>
          </div>
          
          <div className="experience-card">
            <div className="experience-header">
              <h3>SEO Specialist</h3>
              <p className="company">Freelance</p>
              <p className="duration">January 2021 - May 2023</p>
            </div>
            <div className="experience-details">
              <p>Enhanced website rankings by implementing effective on-page and off-page SEO strategies.</p>
              <p>Conducted comprehensive keyword research for targeted content creation and optimization.</p>
              <p>Boosted visibility by developing engaging content optimized for search engines and users alike.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="projects" className="carousel-section">
        <h2>Projects</h2>
        
        <div className="carousel-container">
          <div className="carousel-item">
            <img
              src= {protect}
              alt="Protect The Kirin"
            />
            <h3>Protect The Kirin</h3>
            <p>
              A strategic board game built with Python and Pygame. Features multiplayer functionality
              and follows the Open-Closed Principle with a messaging system.
            </p>
            <Link to="/game" className="btn-primary">
              View Project
            </Link>
          </div>

          <div className="carousel-item">
            <img
              src={oneDiliman}
              alt="OneDiliman"
            />
            <h3>OneDiliman Web Platform</h3>
            <p>
              A responsive web platform developed for the University of the Philippines Diliman
              community using React, TypeScript, and Firebase. This is in compliance with CS 191-192 course.
            </p>
            <a className="btn-primary">
              To be Updated
            </a>
          </div>

          <div className="carousel-item">
            <img
              src= {articles}
              alt="SEO Articles"
            />
            <h3>SEO Article</h3>
            <p>
              I wrote articles focusing on high-value keywords to improve visibility and 
              engagement. One of the articles I wrote is linked below.
            </p>
            <Link to="https://www.popcorngenius.com/popcorn/unicorn-popcorn-recipe" className="btn-primary">
              View Sample Article
            </Link>
          </div>
        </div>
      </section>
  
      <section id="education" className="education-section">
        <h2>Education</h2>
        <div className="education-container">
          <div className="education-card">
            <div className="education-details">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="institution">University of The Philippines Diliman</p>
              <p className="duration">Expected in 2026</p>
              <div className="education-highlights">
                <p>GWA: 1.53</p>
                <p>DOST Scholar, 2021-2026</p>
              </div>
            </div>
          </div>
          
          <div className="education-card">
            <div className="education-details">
              <h3>High School - STEM</h3>
              <p className="institution">St Theresa's College Quezon City</p>
              <p className="duration">March, 2021</p>
              <div className="education-highlights">
                <p>Consistent Outstanding Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <li><a href="#/" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
              <li><a href="#/" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Monica Ashley Laviste. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;