import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ProjectCard({ project }) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.article
      className="project-card"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      variants={variants}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <div className="project-thumb">
        <img
          src={project.image}
          alt={`Aperçu ${project.title}`}
          loading="lazy"
          width="640"
          height="360"
        />
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        {project.description && <p className="project-desc">{project.description}</p>}

        {project.tags?.length > 0 && (
          <ul className="tag-list" aria-label="Technologies">
            {project.tags.map((t) => (
              <li key={t} className="tag-item">#{t}</li>
            ))}
          </ul>
        )}

        {(project.links?.demo || project.links?.code) && (
          <div className="project-actions">
            {project.links?.demo && (
              <a
                className="btn btn-primary"
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir la démo de ${project.title}`}
              >
                Démo
              </a>
            )}
            {project.links?.code && (
              <a
                className="btn btn-secondary"
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir le code de ${project.title}`}
              >
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}