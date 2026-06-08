import { FaGraduationCap, FaCode, FaBook } from 'react-icons/fa';
import { profile, pendidikan, hobi } from '../data/profile';
import { skills } from '../data/skills';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="section-header">
          <h1 className="section-title">Tentang Saya</h1>
          <p className="section-subtitle">Kenali lebih dekat dengan saya</p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="profile-card">
              <div className="profile-image-container">
                <img 
                  src={profile.fotoProfil} 
                  alt={profile.namaLengkap} 
                  className="profile-image"
                />
              </div>
              <div className="profile-info">
                <h2 className="profile-name">{profile.namaLengkap}</h2>
                <p className="profile-nickname">Panggilan: {profile.namaPanggilan}</p>
                <p className="profile-description">{profile.deskripsi}</p>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="info-card">
              <div className="info-header">
                <FaGraduationCap className="info-icon" />
                <h3>Pendidikan</h3>
              </div>
              <div className="education-list">
                {pendidikan.map((edu) => (
                  <div key={edu.id} className="education-item">
                    <h4 className="education-institution">{edu.institusi}</h4>
                    <p className="education-year">{edu.tahun}</p>
                    <p className="education-desc">{edu.deskripsi}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <FaBook className="info-icon" />
                <h3>Hobi</h3>
              </div>
              <div className="hobby-list">
                {hobi.map((h, index) => (
                  <span key={index} className="hobby-tag">{h}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <div className="info-header-full">
            <FaCode className="info-icon" />
            <h3>Skills</h3>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="skill-image-container">
                  <img src={skill.image} alt={skill.nama} className="skill-image" />
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.nama}</h4>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
