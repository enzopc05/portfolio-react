import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../../data/portfolioData';
import '../../styles/components/Header.css';

const Header = () => {
  const { theme } = useTheme();
  const scrolled = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'accueil', label: 'Accueil', href: '#accueil' },
    { id: 'about', label: 'À propos', href: '#about' },
    { id: 'projets', label: 'Projets', href: '#projets' },
    { id: 'competences', label: 'Compétences', href: '#competences' },
    { id: 'parcours', label: 'Parcours', href: '#parcours' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <h1>{personalInfo.name}</h1>
          <span className="header__subtitle">
            {personalInfo.formation} - Année {personalInfo.currentYear}
          </span>
        </div>

        <button 
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="header__nav-item">
                <a 
                  href={item.href}
                  className="header__nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__theme">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;