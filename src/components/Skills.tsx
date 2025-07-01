import React from 'react'
import './Skills.css'

interface Skill {
  name: string
  icon: string
  level: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', icon: 'code', level: 95 },
        { name: 'CSS', icon: 'palette', level: 90 },
        { name: 'JavaScript', icon: 'javascript', level: 88 },
        { name: 'TypeScript', icon: 'code', level: 95 },
        { name: 'SCSS', icon: 'brush', level: 85 }
      ]
    },
    {
      title: 'Tools & Libraries',
      skills: [
        { name: 'Bootstrap', icon: 'style', level: 85 },
        { name: 'Angular Material', icon: 'widgets', level: 80 },
        { name: 'Git', icon: 'account_tree', level: 85 },
        { name: 'Responsive Design', icon: 'devices', level: 90 },
        { name: 'Figma', icon: 'design_services', level: 75 },
        { name: 'Adobe Photoshop', icon: 'brush', level: 70 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Here are the technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon">
                      <span className="material-icons">{skill.icon}</span>
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills