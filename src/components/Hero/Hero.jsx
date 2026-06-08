import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaDownload } from 'react-icons/fa';
import './Hero.css';

const ROLES = ['Frontend Developer', 'UI Designer', 'Video Editor', 'Content Creator'];

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseEnd = 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseEnd);
        }
      } else {
        setTypingText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const socials = [
    { icon: <FaGithub />, url: 'https://github.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaTiktok />, url: 'https://tiktok.com' }
  ];

  const stats = [
    { number: '6+', label: 'Projects' },
    { number: '6+', label: 'Skills' },
    { number: '1+', label: 'Years' }
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">Muhammad Rifqi Alhilali</h1>
            <div className="hero-roles">
              <span className="typing-text">{typingText}</span>
            </div>
            <p className="hero-description">
              A passionate developer and designer creating modern digital experiences. 
              I transform ideas into beautiful, functional websites and applications.
            </p>

            <div className="hero-buttons">
              <button className="btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                <FaDownload /> Download CV
              </button>
              <button className="btn btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </button>
            </div>

            <div className="hero-socials">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="hero-stat-number">{stat.number}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-bg"></div>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alhil&backgroundColor=8B5CF6" 
                alt="Profile" 
                className="hero-profile-img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
