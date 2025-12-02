import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import '../styles/projects.css';

export default function ProjectsGrid() {
  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="projects-header">
        <h2 id="projects-title">Projets</h2>
        <p>Quelques réalisations sélectionnées.</p>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}