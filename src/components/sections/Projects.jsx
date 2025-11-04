import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { useFilter } from '../../hooks/useFilter';
import ProjectCard from '../common/ProjectCard';
import ProjectModal from '../common/ProjectModal';
import '../../styles/components/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const filterFunction = (project, filters) => {
    if (filters.technology && !project.technologies.includes(filters.technology)) {
      return false;
    }
    if (filters.year && project.year !== parseInt(filters.year)) {
      return false;
    }
    return true;
  };

  const { filteredItems, filters, updateFilter, resetFilters } = useFilter(
    projects,
    filterFunction
  );

  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort();
  const allYears = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projets">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">Mes Projets</h2>
          <p className="projects__subtitle">
            Découvrez les projets que j'ai réalisés durant ma formation
          </p>
        </div>

        <div className="projects__filters">
          <select
            className="projects__filter"
            value={filters.technology || ''}
            onChange={(e) => updateFilter('technology', e.target.value)}
          >
            <option value="">Toutes les technologies</option>
            {allTechnologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>

          <select
            className="projects__filter"
            value={filters.year || ''}
            onChange={(e) => updateFilter('year', e.target.value)}
          >
            <option value="">Toutes les années</option>
            {allYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          {(filters.technology || filters.year) && (
            <button className="projects__reset" onClick={resetFilters}>
              Réinitialiser
            </button>
          )}
        </div>

        <div className="projects__count">
          {filteredItems.length} projet{filteredItems.length > 1 ? 's' : ''} trouvé{filteredItems.length > 1 ? 's' : ''}
        </div>

        <div className="projects__grid">
          {filteredItems.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="projects__empty">
            <p>Aucun projet ne correspond à vos critères de recherche.</p>
            <button className="projects__reset" onClick={resetFilters}>
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Modal enrichi */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;