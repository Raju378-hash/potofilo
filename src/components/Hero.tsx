import React from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-title">
              <span className="text-gradient">Raju Nagalagani</span>
            </h1>
            <h2 className="hero-subtitle">Angular Developer</h2>
            <p className="hero-description">
             I'm Raju Nagalagani, a passionate Angular Developer with a strong foundation in building scalable, high-performance web applications. I specialize in creating dynamic, responsive, and user-friendly interfaces using Angular and TypeScript, backed by clean architecture and modern development practices.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image slide-up">
            <div className="image-placeholder">
              <div className="avatar-circle">
                <span className="material-icons">person</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about" className="scroll-indicator">
          <span className="material-icons">keyboard_arrow_down</span>
        </a>
      </div>
    </section>
  )
}

export default Hero