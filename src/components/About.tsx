import React from 'react'
import './About.css'

const About: React.FC = () => {
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/assets/cv.pdf' // Make sure to add your CV file to the public folder
    link.download = 'Your_Name_CV.pdf'
    link.click()
  }

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
             Hi, I’m Raju Nagalagani, a dedicated and curious Angular Developer who loves crafting clean, maintainable, and user-focused web applications. With a strong passion for frontend development and an eye for detail, I aim to build interfaces that not only function well but feel great to use.
            </p>
            <p className="about-paragraph">
             My journey in web development started with a fascination for how websites work behind the scenes. Since then, I’ve grown into a developer who thrives in building component-driven, scalable Angular apps, optimizing performance, and writing code that teams can rely on.
            </p>
            <p className="about-paragraph">
             When I’m not coding, I enjoy exploring UI/UX trends, learning about new web technologies, and occasionally dabble in backend integration and deployment workflows.
            </p>
            
            <div className="cv-section">
              <h3>Download My CV</h3>
              <p>Want to know more about my experience and qualifications?</p>
              <button className="btn-primary cv-button" onClick={downloadCV}>
                <span className="material-icons">download</span>
                Download CV
              </button>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About