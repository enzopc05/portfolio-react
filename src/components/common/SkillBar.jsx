import React, { useEffect, useState } from 'react';
import '../../styles/components/SkillBar.css';

const SkillBar = ({ name, level, color, isVisible }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div 
          className="skill-bar__fill"
          style={{ 
            width: `${width}%`,
            backgroundColor: color || 'var(--primary-color)',
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="skill-bar__glow"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;