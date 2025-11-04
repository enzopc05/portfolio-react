import React, { useState } from 'react';
import { skills } from '../../data/portfolioData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SkillBar from '../common/SkillBar';
import '../../styles/components/Skills.css';

const Skills = () => {
  const [elementRef, isVisible] = useIntersectionObserver();
  const [activeCategory, setActiveCategory] = useState('webDev');

  const categories = {
    webDev: { label: 'Développement Web', icon: '🌐' },
    programmation: { label: 'Programmation', icon: '💻' },
    database: { label: 'Bases de données', icon: '🗄️' },
    tools: { label: 'Outils & Méthodes', icon: '🛠️' }
  };

  const currentSkills = skills[activeCategory];

  // Calculer le niveau moyen de la catégorie
  const averageLevel = currentSkills 
    ? Math.round(
        currentSkills.items.reduce((sum, skill) => sum + skill.level, 0) / 
        currentSkills.items.length
      )
    : 0;

  return (
    <section className="skills" id="competences" ref={elementRef}>
      <div className="skills__container">
        <div className="skills__header">
          <h2 className="skills__title">Mes Compétences</h2>
          <p className="skills__subtitle">
            Un aperçu de mes compétences techniques acquises durant ma formation
          </p>
        </div>

        {/* Onglets de catégories */}
        <div className="skills__tabs">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              className={`skills__tab ${activeCategory === key ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className="skills__tab-icon">{category.icon}</span>
              <span className="skills__tab-label">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Contenu de la catégorie active */}
        <div className="skills__content">
          <div className="skills__info">
            <div className="skills__info-card">
              <span className="skills__info-icon">{categories[activeCategory].icon}</span>
              <div className="skills__info-text">
                <h3 className="skills__info-title">{currentSkills.category}</h3>
                <p className="skills__info-subtitle">
                  {currentSkills.items.length} compétence{currentSkills.items.length > 1 ? 's' : ''}
                </p>
              </div>
              <div className="skills__info-average">
                <span className="skills__info-average-label">Niveau moyen</span>
                <span className="skills__info-average-value">{averageLevel}%</span>
              </div>
            </div>
          </div>

          <div className="skills__grid">
            {currentSkills.items.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skills__item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SkillBar
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>

          {/* Légende des niveaux */}
          <div className="skills__legend">
            <div className="skills__legend-item">
              <span className="skills__legend-dot skills__legend-dot--beginner"></span>
              <span>Débutant (0-40%)</span>
            </div>
            <div className="skills__legend-item">
              <span className="skills__legend-dot skills__legend-dot--intermediate"></span>
              <span>Intermédiaire (40-70%)</span>
            </div>
            <div className="skills__legend-item">
              <span className="skills__legend-dot skills__legend-dot--advanced"></span>
              <span>Avancé (70-100%)</span>
            </div>
          </div>
        </div>

        {/* Statistiques globales */}
        <div className="skills__stats">
          <div className="skills__stat">
            <span className="skills__stat-value">
              {Object.values(skills).reduce((sum, cat) => sum + cat.items.length, 0)}
            </span>
            <span className="skills__stat-label">Compétences totales</span>
          </div>
          <div className="skills__stat">
            <span className="skills__stat-value">
              {Object.keys(skills).length}
            </span>
            <span className="skills__stat-label">Catégories</span>
          </div>
          <div className="skills__stat">
            <span className="skills__stat-value">
              {Math.round(
                Object.values(skills).reduce((sum, cat) => 
                  sum + cat.items.reduce((s, skill) => s + skill.level, 0) / cat.items.length
                , 0) / Object.keys(skills).length
              )}%
            </span>
            <span className="skills__stat-label">Niveau moyen global</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;