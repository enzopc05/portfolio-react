import React from 'react';
import '../../styles/components/ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <article
      className="project-card"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`Ouvrir les détails du projet ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
    >
      <div className="project-card__image">
        <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
        <div className="project-card__overlay">
          <span className="project-card__view">Voir les détails</span>
        </div>
      </div>
      
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          <span className="project-card__year">{project.year}</span>
        </div>
        
        <p className="project-card__description">{project.shortDescription}</p>
        
        <div className="project-card__technologies">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="project-card__tech">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="project-card__tech project-card__tech--more">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;