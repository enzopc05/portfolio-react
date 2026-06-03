import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';
import '../../styles/components/About.css';

const About = () => {
  const { theme } = useTheme();

  const profileImage = theme === 'light'
    ? '/assets/images/photo2moi.jpg'
    : '/assets/images/photo2moiNuit.jpg';

  return (
    <section className="about" id="about">
      <div className="about__container">

        {/* Header */}
        <div className="about__section-header">
          <span className="about__section-label">À propos</span>
          <div className="about__section-line"></div>
        </div>

        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">
              Développeur fullstack<br />
              <span>& futur ingénieur IT</span>
            </h2>

            <p className="about__description">
              Je m'appelle <strong>{personalInfo.name}</strong>, actuellement en{' '}
              <strong>dernière année de Bachelor Développement Informatique</strong> à Sup de Vinci
              (La Défense), en alternance chez <strong>Eurodislog</strong> en tant que Chargé de projet IT junior.
            </p>
            <p className="about__description">
              Passionné par le <strong>développement fullstack</strong>, les <strong>API</strong>{' '}
              et l'automatisation, je travaille quotidiennement avec{' '}
              <strong>C# / .NET</strong>, <strong>React</strong>, <strong>Node.js</strong>{' '}
              et <strong>SQL Server</strong>.
            </p>

            {/* Bannière recherche d'alternance */}
            <div className="about__objective">
              <h3 className="about__objective-title">🎯 Recherche d'alternance</h3>
              <div className="about__objective-content">
                <p>
                  À la recherche d'une <strong>alternance de 24 mois à partir de septembre 2026</strong>{' '}
                  pour un <strong>BAC+5 Expert en Ingénierie Informatique et Innovation Numérique (E3IN)</strong>{' '}
                  à l'ESIEE-IT.
                </p>
                <ul className="about__objective-list">
                  <li>Rythme : 1 mois en entreprise / 1 mois en formation</li>
                  <li>Ingénierie logicielle, DevOps, architecture des SI</li>
                  <li>Cybersécurité, qualité logicielle et cloud</li>
                  <li>Conduite du changement et management des SI</li>
                </ul>
              </div>
            </div>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-value">14+</span>
                <span className="about__stat-label">Projets réalisés</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value">3 ans</span>
                <span className="about__stat-label">En alternance</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value">15+</span>
                <span className="about__stat-label">Technologies</span>
              </div>
            </div>

            <div className="about__actions">
              <a
                href={personalInfo.cvUrl}
                className="about__btn about__btn--primary"
                download
              >
                <i className="fas fa-download"></i>
                Télécharger mon CV
              </a>
              <a
                href="#contact"
                className="about__btn about__btn--secondary"
              >
                <i className="fas fa-envelope"></i>
                Me contacter
              </a>
            </div>
          </div>

          <div className="about__image">
            <div className="about__image-wrapper">
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="about__photo"
              />
              <div className="about__image-decoration"></div>
            </div>
          </div>
        </div>

        {/* Intérêts */}
        <div className="about__interests">
          <h3 className="about__interests-title">Centres d'intérêt</h3>
          <div className="about__interests-grid">
            <div className="about__interest">
              <span className="about__interest-icon">💻</span>
              <h4>Développement Web</h4>
              <p>Applications fullstack modernes, API et architecture logicielle</p>
            </div>
            <div className="about__interest">
              <span className="about__interest-icon">🎯</span>
              <h4>Gestion de projet</h4>
              <p>Méthodes Agile/Scrum, coordination et pilotage de projets IT</p>
            </div>
            <div className="about__interest">
              <span className="about__interest-icon">📸</span>
              <h4>Photographie & Musique</h4>
              <p>Créativité visuelle, voyages et découvertes culturelles</p>
            </div>
            <div className="about__interest">
              <span className="about__interest-icon">🏀</span>
              <h4>Sport</h4>
              <p>Basket-ball et musculation pour l'équilibre corps-esprit</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
