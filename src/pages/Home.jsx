import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Home.css';
import { profile } from '../data/profile';

function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Portfolio Personal</span>
          </div>
          
          <h1 className="hero-title">
            Halo, Saya <span className="highlight">{profile.namaLengkap}</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Pelajar di <span className="highlight-school">{profile.pendidikan.institusi}</span>
          </h2>
          
          <p className="hero-description">{profile.deskripsi}</p>
          
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              <span>Tentang Saya</span>
              <FaArrowRight />
            </Link>
            <Link to="/project" className="btn btn-secondary">
              <FaProjectDiagram />
              <span>Project</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <FaEnvelope />
              <span>Kontak</span>
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <FaCode className="stat-icon" />
              <div className="stat-info">
                <span className="stat-number">{profile.stats.skills}</span>
                <span className="stat-label">Skills</span>
              </div>
            </div>
            <div className="stat-item">
              <FaProjectDiagram className="stat-icon" />
              <div className="stat-info">
                <span className="stat-number">{profile.stats.projects}</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-number-experience">{profile.stats.experience}</span>
              <span className="stat-label">Status</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src={profile.fotoProfil} 
              alt={profile.namaLengkap} 
              className="hero-image"
            />
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
