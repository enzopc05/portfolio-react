import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import '../../styles/components/ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Changer de thème"
      title={theme === 'light' ? 'Mode nuit' : 'Mode jour'}
    >
      <div className={`theme-icon ${theme}`}>
        {theme === 'light' ? (
          <span className="sun">☀️</span>
        ) : (
          <span className="moon">🌙</span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;