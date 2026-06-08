import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaProjectDiagram } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaProjectDiagram />, number: '6+', label: 'Projects' },
    { icon: <FaCode />, number: '6+', label: 'Skills' },
    { icon: <FaGraduationCap />, number: '1+', label: 'Years' }
  ];

  const timeline = [
    {
      year: '2024 - Present',
      school: 'SMA IT HSI Boarding School',
      desc: 'Pendidikan menengah atas dengan kurikulum terintegrasi'
    },
    {
      year: '2021 - 2024',
      school: 'SMPIT HSI Boarding School',
      desc: 'Pendidikan menengah pertama'
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-image-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-container">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alhil&backgroundColor=8B5CF6" 
                alt="About" 
                className="about-image"
              />
              <div className="about-image-overlay"></div>
            </div>
            <div className="about-experience-badge">
              <div className="badge-number">1+</div>
              <div className="badge-text">Years Experience</div>
            </div>
          </motion.div>

          <motion.div 
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Frontend Developer & UI Designer</h3>
            <p>
              Saya adalah seorang pelajar SMA yang passionate dalam dunia teknologi dan desain. 
              Saya senang mendalami bidang-bidang yang menarik perhatian saya seperti frontend development, 
              UI design, dan video editing. Saya memiliki sifat yang fleksibel dan mudah menyesuaikan diri 
              dengan berbagai keadaan.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="about-stat-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="about-timeline">
              <h4 className="timeline-title">Education Journey</h4>
              <div className="timeline">
                {timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-school">{item.school}</div>
                    <div className="timeline-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
