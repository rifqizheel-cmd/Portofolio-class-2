import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaVideo } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Intermediate', percentage: 80, category: 'Frontend', icon: '🔶' },
    { name: 'CSS', level: 'Intermediate', percentage: 75, category: 'Frontend', icon: '🔷' },
    { name: 'JavaScript', level: 'Beginner', percentage: 60, category: 'Frontend', icon: '🟡' },
    { name: 'React JS', level: 'Beginner', percentage: 55, category: 'Frontend', icon: '/src/assets/simbol.png' },
    { name: 'Figma', level: 'Intermediate', percentage: 70, category: 'Design', icon: '🎨' },
    { name: 'Canva', level: 'Advanced', percentage: 85, category: 'Design', icon: '✨' },
    { name: 'Video Editing', level: 'Intermediate', percentage: 65, category: 'Other', icon: '🎬' },
    { name: 'Git', level: 'Beginner', percentage: 50, category: 'Tools', icon: '📦' }
  ];

  const categories = {
    Frontend: { icon: <FaCode />, items: skills.filter(s => s.category === 'Frontend') },
    Design: { icon: <FaPalette />, items: skills.filter(s => s.category === 'Design') },
    Other: { icon: <FaVideo />, items: skills.filter(s => s.category === 'Other' || s.category === 'Tools') }
  };

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="skill-header">
                <div className="skill-icon">
                  {skill.icon.includes('/') ? (
                    <img src={skill.icon} alt={skill.name} style={{ width: 24, height: 24 }} />
                  ) : (
                    <span>{skill.icon}</span>
                  )}
                </div>
                <div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.level}</div>
                </div>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar-bg">
                  <div 
                    className="skill-bar" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <div className="skill-percentage">{skill.percentage}%</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="skills-categories">
          {Object.entries(categories).map(([cat, data]) => (
            <motion.div 
              key={cat}
              className="skill-category-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4>{data.icon} {cat} <span>Skills</span></h4>
              <div className="skills-grid" style={{ gridTemplateColumns: '1fr' }}>
                {data.items.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar-container">
                      <div className="skill-bar-bg">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
