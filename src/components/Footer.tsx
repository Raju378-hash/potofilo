import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Your Name</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern web technologies.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="section-title">Quick Links</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          
          <div className="footer-section">
            <h4 className="section-title">Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link" title="GitHub">
                <span className="material-icons">code</span>
              </a>
              <a href="#" className="social-link" title="LinkedIn">
                <span className="material-icons">work</span>
              </a>
              <a href="#" className="social-link" title="Twitter">
                <span className="material-icons">alternate_email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer