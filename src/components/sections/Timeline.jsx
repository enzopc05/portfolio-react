import React from 'react';
import { timeline } from '../../data/portfolioData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import '../../styles/components/Timeline.css';

const Timeline = () => {
  const [elementRef, isVisible] = useIntersectionObserver();

  return (
    <section className="timeline-section" id="parcours" ref={elementRef}>
      <div className="timeline-section__container">
        <div className="timeline-section__header">
          <h2 className="timeline-section__title">Mon Parcours</h2>
          <p className="timeline-section__subtitle">
            Un aperçu chronologique de mon évolution académique et professionnelle
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              key={item.id}
              className={`timeline__item ${isVisible ? 'timeline__item--visible' : ''}`}
              style={{
                animationDelay: `${index * 0.2}s`,
                '--accent-color': item.color
              }}
            >
              <div className="timeline__marker">
                <span className="timeline__icon">{item.icon}</span>
              </div>

              <div className="timeline__content">
                <div className="timeline__card">
                  <div className="timeline__header">
                    <h3 className="timeline__period">{item.period}</h3>
                    <span className="timeline__year">{item.year}</span>
                    {item.isCurrent && (
                      <span className="timeline__badge">En cours</span>
                    )}
                  </div>

                  <p className="timeline__description">{item.description}</p>

                  <div className="timeline__achievements">
                    <h4 className="timeline__achievements-title">
                      Réalisations :
                    </h4>
                    <ul className="timeline__list">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="timeline__list-item">
                          <span className="timeline__check">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats du parcours */}
        <div className="timeline-section__stats">
          <div className="timeline-stat">
            <div className="timeline-stat__icon">🎓</div>
            <div className="timeline-stat__content">
              <span className="timeline-stat__value">
                {new Date().getFullYear() - 2023}+
              </span>
              <span className="timeline-stat__label">Années de formation</span>
            </div>
          </div>

          <div className="timeline-stat">
            <div className="timeline-stat__icon">💼</div>
            <div className="timeline-stat__content">
              <span className="timeline-stat__value">2</span>
              <span className="timeline-stat__label">Entreprises</span>
            </div>
          </div>

          <div className="timeline-stat">
            <div className="timeline-stat__icon">🚀</div>
            <div className="timeline-stat__content">
              <span className="timeline-stat__value">10+</span>
              <span className="timeline-stat__label">Projets réalisés</span>
            </div>
          </div>

          <div className="timeline-stat">
            <div className="timeline-stat__icon">🎯</div>
            <div className="timeline-stat__content">
              <span className="timeline-stat__value">5+</span>
              <span className="timeline-stat__label">Technologies maîtrisées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;