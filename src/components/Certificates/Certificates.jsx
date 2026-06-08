import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Frontend Development Fundamentals',
      issuer: 'freeCodeCamp',
      date: 'December 2024',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      credential: 'FCC-2024-frontend'
    },
    {
      id: 2,
      title: 'React JS Professional Certificate',
      issuer: 'Meta',
      date: 'November 2024',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      credential: 'META-React-2024'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      issuer: 'Coursera',
      date: 'October 2024',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      credential: 'COUR-UIUX-2024'
    },
    {
      id: 4,
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: 'September 2024',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800',
      credential: 'FCC-2024-algorithms'
    },
    {
      id: 5,
      title: 'Figma for Beginners',
      issuer: 'Udemy',
      date: 'August 2024',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800',
      credential: 'UDY-Figma-2024'
    },
    {
      id: 6,
      title: 'Git & GitHub Complete Guide',
      issuer: 'Udemy',
      date: 'July 2024',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800',
      credential: 'UDY-Git-2024'
    }
  ];

  return (
    <section className="certificates section" id="certificates">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certificate-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
                <div className="certificate-overlay">
                  <div className="certificate-zoom-icon">
                    <FaAward />
                  </div>
                </div>
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="certificate-issuer">{cert.issuer}</div>
                <div className="certificate-date">{cert.date}</div>
                <div className="certificate-credential">
                  <span className="credential-link">
                    <FaExternalLinkAlt /> Verify
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
