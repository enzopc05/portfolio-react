import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__container">
        {/* Illustration 404 */}
        <div className="notfound__illustration">
          <div className="notfound__number">
            <span className="notfound__digit">4</span>
            <span className="notfound__digit notfound__digit--middle">0</span>
            <span className="notfound__digit">4</span>
          </div>
          <div className="notfound__orbit"></div>
          <div className="notfound__orbit notfound__orbit--reverse"></div>
        </div>

        {/* Contenu */}
        <div className="notfound__content">
          <h1 className="notfound__title">Page introuvable</h1>
          <p className="notfound__description">
            Oups ! La page que vous recherchez semble s'être perdue dans l'espace numérique.
          </p>
          <p className="notfound__suggestion">
            Elle a peut-être été déplacée, supprimée, ou n'a jamais existé.
          </p>

          {/* Boutons d'action */}
          <div className="notfound__actions">
            <Link to="/" className="notfound__btn notfound__btn--primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Retour à l'accueil
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="notfound__btn notfound__btn--secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Page précédente
            </button>
          </div>

          {/* Liens utiles */}
          <div className="notfound__links">
            <p className="notfound__links-title">Pages populaires :</p>
            <div className="notfound__links-list">
              <Link to="/#about" className="notfound__link">À propos</Link>
              <Link to="/#projects" className="notfound__link">Projets</Link>
              <Link to="/#skills" className="notfound__link">Compétences</Link>
              <Link to="/#contact" className="notfound__link">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;