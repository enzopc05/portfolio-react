import React, { useState, useEffect } from 'react';
import '../../styles/components/ScrollToTop.css';

/**
 * Composant ScrollToTop - Bouton pour remonter en haut de page
 * 
 * @param {number} showAfter - Nombre de pixels avant d'afficher le bouton (défaut: 300)
 * @param {string} position - Position du bouton : 'bottom-right', 'bottom-left' (défaut: 'bottom-right')
 */
const ScrollToTop = ({ showAfter = 300, position = 'bottom-right' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Gérer la visibilité et le pourcentage de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / windowHeight) * 100;

      setIsVisible(scrolled > showAfter);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top scroll-to-top--${position} ${isVisible ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
      title="Retour en haut"
    >
      {/* Cercle de progression */}
      <svg className="scroll-to-top__progress" viewBox="0 0 100 100">
        <circle
          className="scroll-to-top__progress-bg"
          cx="50"
          cy="50"
          r="45"
        />
        <circle
          className="scroll-to-top__progress-bar"
          cx="50"
          cy="50"
          r="45"
          style={{
            strokeDashoffset: `${283 - (283 * scrollProgress) / 100}`
          }}
        />
      </svg>

      {/* Icône flèche */}
      <svg
        className="scroll-to-top__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </button>
  );
};

export default ScrollToTop;