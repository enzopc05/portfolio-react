import React from 'react';
import '../styles/components/FloatingShapes.css';

/**
 * Composant pour afficher des formes géométriques flottantes
 * en arrière-plan avec animations douces
 */
const FloatingShapes = () => {
  return (
    <div className="floating-shapes">
      {/* Cercle */}
      <div className="floating-shape shape-circle"></div>
      
      {/* Carré/Losange */}
      <div className="floating-shape shape-square"></div>
      
      {/* Triangle */}
      <div className="floating-shape shape-triangle"></div>
      
      {/* Hexagone */}
      <div className="floating-shape shape-hexagon"></div>
      
      {/* Cercle petit */}
      <div className="floating-shape shape-circle-small"></div>
    </div>
  );
};

export default FloatingShapes;