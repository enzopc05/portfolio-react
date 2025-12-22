import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { projects } from '../../data/portfolioData';
import { useFilter } from '../../hooks/useFilter';
import ProjectCard from '../common/ProjectCard';
import TechDropdown from '../common/TechDropdown';
import ProjectModal from '../common/ProjectModal';
import '../../styles/components/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  // Parse URL params into initial filters
  const initialFilters = useMemo(() => {
    const techParam = searchParams.get('tech');
    const yearParam = searchParams.get('year');
    const qParam = searchParams.get('q');
    const categoryParam = searchParams.get('category');
    return {
      selectedTechs: techParam ? techParam.split(',').filter(Boolean) : [],
      year: yearParam || '',
      q: qParam || '',
      category: categoryParam || '', // 'ecole', 'entreprise', or ''
    };
  }, [searchParams]);

  const filterFunction = (project, filters) => {
    // Category filter
    if (filters.category && project.category !== filters.category) {
      return false;
    }
    // Multi-tech
    if (filters.selectedTechs && filters.selectedTechs.length > 0) {
      const hasAll = filters.selectedTechs.every((t) => project.technologies.includes(t));
      if (!hasAll) return false;
    }
    // Year
    if (filters.year && project.year !== parseInt(filters.year)) {
      return false;
    }
    // Search query (title + shortDescription)
    if (filters.q) {
      const q = filters.q.toLowerCase();
      const hay = `${project.title} ${project.shortDescription} ${project.fullDescription || ''}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  };

  const { filteredItems, filters, updateFilter, resetFilters, setFilters } = useFilter(
    projects,
    filterFunction,
    initialFilters
  );

  // Keep URL in sync with filters
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.selectedTechs && filters.selectedTechs.length) params.set('tech', filters.selectedTechs.join(','));
    if (filters.year) params.set('year', String(filters.year));
    if (filters.q) params.set('q', String(filters.q));
    if (filters.category) params.set('category', String(filters.category));
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort();
  const allYears = [...new Set(projects.map(p => p.year))].sort((a, b) => b - a);

  // Sort filtered items by year (recent first) and limit to 6 if not showAll
  const displayedItems = useMemo(() => {
    const sorted = [...filteredItems].sort((a, b) => b.year - a.year);
    return showAll ? sorted : sorted.slice(0, 6);
  }, [filteredItems, showAll]);

  const hasMore = filteredItems.length > 6;

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
          {/* Recherche texte */}
          <input
            className="projects__filter projects__filter--search"
            type="search"
            placeholder="Rechercher un projet..."
            value={filters.q || ''}
            onChange={(e) => updateFilter('q', e.target.value)}
            aria-label="Rechercher dans les projets"
          />

          {/* Catégorie - Boutons toggle */}
          <div className="projects__category-filter" role="group" aria-label="Filtrer par catégorie">
            <button
              type="button"
              className={`projects__category-btn ${filters.category === 'ecole' ? 'projects__category-btn--active' : ''}`}
              onClick={() => updateFilter('category', filters.category === 'ecole' ? '' : 'ecole')}
              aria-pressed={filters.category === 'ecole'}
            >
              📚 École
            </button>
            <button
              type="button"
              className={`projects__category-btn ${filters.category === 'entreprise' ? 'projects__category-btn--active' : ''}`}
              onClick={() => updateFilter('category', filters.category === 'entreprise' ? '' : 'entreprise')}
              aria-pressed={filters.category === 'entreprise'}
            >
              💼 Entreprise
            </button>
          </div>

          {/* Années */}
          <select
            className="projects__filter"
            value={filters.year || ''}
            onChange={(e) => updateFilter('year', e.target.value)}
            aria-label="Filtrer par année"
          >
            <option value="">Toutes les années</option>
            {allYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          {/* Technologies - dropdown */}
          <TechDropdown
            technologies={allTechnologies}
            selectedTechs={filters.selectedTechs || []}
            onToggleTech={(tech) => {
              const current = new Set(filters.selectedTechs || []);
              if (current.has(tech)) current.delete(tech); else current.add(tech);
              updateFilter('selectedTechs', Array.from(current));
            }}
            label="Technologies"
          />

          {(filters.q || (filters.selectedTechs && filters.selectedTechs.length) || filters.year || filters.category) && (
            <button className="projects__reset" onClick={resetFilters}>
              Réinitialiser
            </button>
          )}
        </div>

        <div className="projects__count">
          {filteredItems.length} projet{filteredItems.length > 1 ? 's' : ''} trouvé{filteredItems.length > 1 ? 's' : ''}
        </div>

        <div className="projects__grid">
          {displayedItems.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>

        {/* Bouton Voir plus */}
        {hasMore && !showAll && (
          <div className="projects__show-more">
            <button className="projects__show-more-btn" onClick={() => setShowAll(true)}>
              Voir plus ({filteredItems.length - 6} projets supplémentaires)
            </button>
          </div>
        )}

        {/* Bouton Voir moins */}
        {showAll && hasMore && (
          <div className="projects__show-more">
            <button className="projects__show-more-btn" onClick={() => setShowAll(false)}>
              Voir moins
            </button>
          </div>
        )}

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