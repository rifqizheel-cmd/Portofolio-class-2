import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaVideo, FaChalkboardTeacher } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building modern, responsive websites using React JS, with clean code and optimal performance.',
      price: 'Starting from $100',
      features: ['React JS Development', 'Responsive Design', 'API Integration', 'SEO Optimization']
    },
    {
      id: 2,
      icon: <FaPalette />,
      title: 'UI Design',
      description: 'Creating beautiful user interfaces with Figma, focusing on user experience and modern aesthetics.',
      price: 'Starting from $75',
      features: ['UI/UX Design', 'Figma Prototyping', 'Mobile App Design', 'Design Systems']
    },
    {
      id: 3,
      icon: <FaVideo />,
      title: 'Video Editing',
      description: 'Professional video editing for YouTube, social media, and promotional content.',
      price: 'Starting from $50',
      features: ['YouTube Videos', 'Social Media Content', 'Transitions & Effects', 'Color Grading']
    },
    {
      id: 4,
      icon: <FaChalkboardTeacher />,
      title: 'Teaching',
      description: 'Teaching programming and design basics to beginners with patient and structured approach.',
      price: '$25/hour',
      features: ['HTML & CSS', 'JavaScript Basics', 'Figma Fundamentals', 'Personal Mentorship']
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <div className="service-features">
                {service.features.map((feature, i) => (
                  <div key={i} className="service-feature">{feature}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
