import React, { useEffect } from 'react';
import '../../styles/components/Toast.css';

/**
 * Composant Toast pour afficher des notifications temporaires
 * 
 * @param {string} message - Message à afficher
 * @param {string} type - Type de notification : 'success', 'error', 'warning', 'info'
 * @param {boolean} isVisible - Contrôle la visibilité du toast
 * @param {function} onClose - Fonction appelée à la fermeture
 * @param {number} duration - Durée d'affichage en ms (défaut: 3000)
 * @param {string} position - Position : 'top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'
 */
const Toast = ({ 
  message, 
  type = 'info', 
  isVisible = false, 
  onClose,
  duration = 3000,
  position = 'top-right'
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  // Icônes selon le type
  const icons = {
    success: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
    error: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    ),
    warning: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    ),
    info: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    )
  };

  return (
    <div className={`toast toast--${type} toast--${position} toast--visible`}>
      <div className="toast__icon">
        {icons[type]}
      </div>
      <div className="toast__content">
        <p className="toast__message">{message}</p>
      </div>
      <button 
        className="toast__close" 
        onClick={onClose}
        aria-label="Fermer la notification"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      {duration > 0 && (
        <div 
          className="toast__progress" 
          style={{ animationDuration: `${duration}ms` }}
        ></div>
      )}
    </div>
  );
};

export default Toast;