import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const contactMethods = [
    { icon: <FaEnvelope />, title: 'Email', value: 'alhil@example.com' },
    { icon: <FaPhone />, title: 'Phone', value: '+62 812 3456 7890' },
    { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Indonesia' }
  ];

  const socials = [
    { icon: <FaGithub />, url: 'https://github.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaTiktok />, url: 'https://tiktok.com' }
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Work Together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to contact me!
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-text">
                    <h4>{method.title}</h4>
                    <span>{method.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Write your message..." required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="form-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <a href="https://wa.me/6281234567890" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Contact;
