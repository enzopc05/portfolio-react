import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const delayedPositionRef = useRef({ x: 0, y: 0 });

  // Activer/désactiver la classe qui masque le curseur natif uniquement quand le composant est monté
  useEffect(() => {
    document.body.classList.add('custom-cursor-enabled');
    return () => document.body.classList.remove('custom-cursor-enabled');
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Suivre la position de la souris
    const updateMousePosition = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      // Curseur principal (point) - suit directement
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    // Animation du cercle externe avec délai
    const animateCursor = () => {
      delayedPositionRef.current.x += (positionRef.current.x - delayedPositionRef.current.x) * 0.15;
      delayedPositionRef.current.y += (positionRef.current.y - delayedPositionRef.current.y) * 0.15;
      
      cursor.style.transform = `translate(${delayedPositionRef.current.x}px, ${delayedPositionRef.current.y}px)`;
      
      requestAnimationFrame(animateCursor);
    };

    // Détecter le survol d'éléments cliquables
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const clickableElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"], .clickable'
    );

    clickableElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clickableElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${isHovering ? 'custom-cursor--hover' : ''}`}
      />
      <div 
        ref={cursorDotRef} 
        className="custom-cursor-dot"
      />
    </>
  );
};

export default CustomCursor;