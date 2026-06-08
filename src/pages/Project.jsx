import { FaFolderOpen, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import './Project.css';

function Project() {
  return (
    <section className="project">
      <div className="project-container">
        <div className="section-header">
          <h1 className="section-title">Project</h1>
          <p className="section-subtitle">Kumpulan project yang telah saya buat</p>
        </div>

        {projects.length === 0 ? (
          <div className="empty-state">
            <FaFolderOpen className="empty-icon" />
            <h2 className="empty-title">Belum ada project yang ditambahkan.</h2>
            <p className="empty-text">Project akan ditambahkan kemudian.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div className="project-icon">
                    <FaFolderOpen />
                  </div>
                  <span className="project-category-tag">
                    {project.category}
                  </span>
                </div>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.live} className="project-btn primary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.github} className="project-btn secondary" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;
