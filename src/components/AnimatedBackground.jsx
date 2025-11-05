import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/components/AnimatedBackground.css';

const AnimatedBackground = () => {
  const { theme } = useTheme();

  return (
    <div className={`animated-background ${theme}`}>
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="gradient-orb gradient-orb-2"></div>
      <div className="gradient-orb gradient-orb-3"></div>
      <div className="mesh-gradient"></div>
    </div>
  );
};

export default AnimatedBackground;