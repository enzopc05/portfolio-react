import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/components/ThemeTransition.css';

/**
 * Composant pour gérer l'animation de transition entre les thèmes
 * Animation de rotation soleil → lune avec effet de fondu
 */
const ThemeTransition = () => {
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevTheme, setPrevTheme] = useState(theme);

  useEffect(() => {
    if (prevTheme !== theme) {
      setIsTransitioning(true);
      
      // Fin de l'animation après 1 seconde
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevTheme(theme);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [theme, prevTheme]);

  if (!isTransitioning) return null;

  return (
    <div className="theme-transition-overlay">
      <div className="theme-transition-icon">
        {prevTheme === 'light' ? (
          <span className="transition-sun">☀️</span>
        ) : (
          <span className="transition-moon">🌙</span>
        )}
      </div>
      <div className="theme-transition-ripple"></div>
    </div>
  );
};

export default ThemeTransition;