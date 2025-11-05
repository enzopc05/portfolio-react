import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';
import '../../styles/components/About.css';

const About = () => {
  const { theme } = useTheme();

  // Sélection de la photo selon le thème
  const profileImage = theme === 'light' 
    ? '/assets/images/photo2moi.jpg' 
    : '/assets/images/photo2moiNuit.jpg';

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">À propos de moi</h2>
            <p className="about__description">
              Je m'appelle <strong>{personalInfo.name}</strong>, étudiant en{' '}
              <strong>BTS Systèmes Informatiques aux Organisations (SLAM)</strong>.
            </p>
            <p className="about__description">
              Passionné par le <strong>développement web</strong> et la{' '}
              <strong>gestion de projets IT</strong>, je travaille avec des technologies 
              comme <strong>JavaScript</strong>, <strong>Python</strong>, <strong>Java</strong>, 
              et <strong>SQL</strong>.
            </p>
            <p className="about__description">
              Mon objectif est de devenir un développeur polyvalent capable de créer 
              des solutions innovantes et de m'adapter rapidement aux nouvelles technologies.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-value">{personalInfo.currentYear}</span>
                <span className="about__stat-label">Année d'études</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value">10+</span>
                <span className="about__stat-label">Projets réalisés</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value">5+</span>
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

        {/* Section des intérêts */}
        <div className="about__interests">
          <h3 className="about__interests-title">Mes centres d'intérêt</h3>
          <div className="about__interests-grid">
            <div className="about__interest">
              <div className="about__interest-icon">💻</div>
              <h4>Développement Web</h4>
              <p>Création d'applications web modernes et responsive</p>
            </div>
            <div className="about__interest">
              <div className="about__interest-icon">🎯</div>
              <h4>Gestion de projet</h4>
              <p>Organisation et coordination d'équipes de développement</p>
            </div>
            <div className="about__interest">
              <div className="about__interest-icon">🚀</div>
              <h4>Nouvelles technologies</h4>
              <p>Veille technologique et apprentissage continu</p>
            </div>
            <div className="about__interest">
              <div className="about__interest-icon">🎨</div>
              <h4>UI/UX Design</h4>
              <p>Design d'interfaces intuitives et esthétiques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;