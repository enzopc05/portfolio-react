import React, { useState, useRef, useEffect } from 'react';
import '../../styles/components/TechDropdown.css';

const TechDropdown = ({ technologies, selectedTechs, onToggleTech, label = 'Technologies' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le dropdown au clic en dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = selectedTechs || [];
  const displayText = selected.length === 0 
    ? label 
    : `${label} (${selected.length})`;

  return (
    <div className="tech-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className={`tech-dropdown__trigger ${isOpen ? 'tech-dropdown__trigger--active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Filtrer par ${label}`}
        aria-expanded={isOpen}
      >
        {displayText}
        <span className="tech-dropdown__icon">▼</span>
      </button>

      {isOpen && (
        <div className="tech-dropdown__menu" role="listbox">
          {technologies.map((tech) => {
            const isSelected = selected.includes(tech);
            return (
              <label key={tech} className="tech-dropdown__option">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggleTech(tech)}
                  aria-label={`Filtrer par ${tech}`}
                />
                <span className="tech-dropdown__label">
                  {tech}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TechDropdown;
