import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';
import '../../styles/components/Hero.css';
import '../../styles/components/PhotoEffects.css';

const Hero = () => {
  const { theme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sélection de la photo selon le thème
  // Si la photo de nuit n'existe pas, on garde celle du jour
  const profileImage = theme === 'light' 
    ? '/assets/images/photo2moi.jpg' 
    : '/assets/images/photo2moiNuit.jpg'; // ← Utilisez la même photo pour l'instant

  return (
    <section className="hero" id="accueil">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Bonjour, je suis <span className="hero__name">{personalInfo.name}</span>
            </h1>
            <p className="hero__subtitle">
              {personalInfo.formation} - {personalInfo.currentYear}ème année
            </p>
            <p className="hero__description">
              {personalInfo.bio}
            </p>
            
            <div className="hero__buttons">
              <button 
                className="hero__btn hero__btn--primary"
                onClick={() => scrollToSection('projets')}
              >
                Voir mes projets
              </button>
              <a 
                href={personalInfo.cvUrl}
                className="hero__btn hero__btn--secondary"
                download
              >
                Télécharger mon CV
              </a>
            </div>

            <div className="hero__social">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="hero__social-link"
                aria-label="Email"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="hero__image">
            <div className="hero__image-wrapper">
              {/* Photo principale - S'assure qu'elle reste visible */}
              <img 
                src={profileImage}
                alt={personalInfo.name}
                className="hero__photo"
                style={{ position: 'relative', zIndex: 2 }}
              />
              
              {/* Décoration existante (cercle pointillé) */}
              <div className="hero__image-decoration"></div>

              {/* Particules dorées pour le mode jour */}
              <div className="hero__sun-particles">
                <div className="sun-particle"></div>
                <div className="sun-particle"></div>
                <div className="sun-particle"></div>
                <div className="sun-particle"></div>
                <div className="sun-particle"></div>
                <div className="sun-particle"></div>
                <div className="sun-particle"></div>
                <div className="sun-particle"></div>
              </div>

              {/* Étoiles orbitales pour le mode nuit */}
              <div className="hero__moon-stars">
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
                <div className="moon-star"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-icon"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;