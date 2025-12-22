import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';
import '../../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(scroll, 120);
    } else {
      scroll();
    }
  };

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Compétences' },
    { id: 'parcours', label: 'Parcours' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Contact */}
          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <div className="footer__contact">
              <a href={`mailto:${personalInfo.email}`} className="footer__link">
                <i className="fas fa-envelope"></i>
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="footer__link">
                <i className="fas fa-phone"></i>
                {personalInfo.phone}
              </a>
              <p className="footer__link">
                <i className="fas fa-map-marker-alt"></i>
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="footer__section">
            <h3 className="footer__title">Liens Rapides</h3>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="footer__nav-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="footer__section">
            <h3 className="footer__title">Réseaux Sociaux</h3>
            <div className="footer__social">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p className="footer__text">
              Étudiant en {personalInfo.formation}, passionné par le développement web et les nouvelles technologies.
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="footer__divider"></div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {personalInfo.name} | Tous droits réservés
          </p>
          <div className="footer__legal">
            <Link to="/politique-confidentialite" className="footer__legal-link">
              Politique de confidentialité
            </Link>
            <span className="footer__separator">•</span>
            <Link to="/mentions-legales" className="footer__legal-link">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;