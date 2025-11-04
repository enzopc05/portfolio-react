import React from 'react';
import '../../styles/components/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fermer">
          ✕
        </button>

        {/* En-tête avec image */}
        <div className="modal__header">
          <img 
            src={project.image} 
            alt={project.title}
            className="modal__image"
          />
          <div className="modal__header-overlay">
            <h2 className="modal__title">{project.title}</h2>
            <span className="modal__year">{project.year}</span>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="modal__content">
          {/* Informations principales */}
          <div className="modal__section">
            <h3 className="modal__section-title">📋 Description</h3>
            <p className="modal__description">{project.fullDescription}</p>
          </div>

          {/* Technologies utilisées */}
          <div className="modal__section">
            <h3 className="modal__section-title">🛠️ Technologies utilisées</h3>
            <div className="modal__technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="modal__tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Fonctionnalités */}
          {project.features && project.features.length > 0 && (
            <div className="modal__section">
              <h3 className="modal__section-title">✨ Fonctionnalités principales</h3>
              <ul className="modal__list">
                {project.features.map((feature, index) => (
                  <li key={index} className="modal__list-item">
                    <span className="modal__list-icon">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Apprentissages */}
          {project.learnings && project.learnings.length > 0 && (
            <div className="modal__section">
              <h3 className="modal__section-title">🎓 Compétences développées</h3>
              <ul className="modal__list">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="modal__list-item">
                    <span className="modal__list-icon">▸</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Informations complémentaires */}
          <div className="modal__info-grid">
            <div className="modal__info-item">
              <span className="modal__info-label">📅 Année</span>
              <span className="modal__info-value">{project.year}</span>
            </div>
            <div className="modal__info-item">
              <span className="modal__info-label">🎯 Catégorie</span>
              <span className="modal__info-value">
                {project.category === 'ecole' ? 'Projet scolaire' : 'Projet personnel'}
              </span>
            </div>
            <div className="modal__info-item">
              <span className="modal__info-label">📚 Période</span>
              <span className="modal__info-value">{project.period}</span>
            </div>
            <div className="modal__info-item">
              <span className="modal__info-label">🔢 Année d'études</span>
              <span className="modal__info-value">{project.yearOfStudy}ème année</span>
            </div>
          </div>

          {/* Liens */}
          <div className="modal__actions">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal__btn modal__btn--github"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Voir sur GitHub
              </a>
            )}
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal__btn modal__btn--demo"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Voir la démo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;