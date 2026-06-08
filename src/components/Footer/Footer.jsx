import { Link } from 'react-router-dom';
import { FaHeart, FaGithub, FaInstagram, FaCode } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <FaGithub />, url: 'https://github.com/rifqizheel-cmd', label: 'GitHub' },
    { icon: <FaInstagram />, url: 'https://instagram.com/rifqie_alheal', label: 'Instagram' }
  ];

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Project', path: '/project' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <FaCode className="logo-icon" />
              <span>Alhil.</span>
            </div>
            <p>
              Pelajar di SMA IT HSI Boarding School yang passionate dalam programming dan design.
            </p>
            <div className="footer-social">
              {socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" title={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {links.map((link, index) => (
                <Link key={index} to={link.path}>{link.name}</Link>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-links">
              <a href="mailto:rifqizheel@gmail.com">rifqizheel@gmail.com</a>
              <a href="https://wa.me/6289510035162" target="_blank" rel="noopener noreferrer">089510035162</a>
              <span>Indonesia</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Muhammad Rifqi Alhilali. All Rights Reserved.
          </p>
          <p>
            Dibuat dengan <FaHeart className="heart-icon" /> menggunakan ReactJS + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
