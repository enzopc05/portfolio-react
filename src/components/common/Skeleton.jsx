import React from 'react';
import '../../styles/components/Skeleton.css';

/**
 * Composant Skeleton pour afficher un état de chargement élégant
 * 
 * @param {string} variant - Type de skeleton : 'text', 'title', 'circular', 'rectangular', 'card'
 * @param {string} width - Largeur personnalisée (ex: '200px', '100%')
 * @param {string} height - Hauteur personnalisée (ex: '20px', '400px')
 * @param {number} count - Nombre de skeletons à afficher (pour les lignes de texte)
 * @param {string} className - Classes CSS supplémentaires
 */
const Skeleton = ({ 
  variant = 'text', 
  width, 
  height, 
  count = 1,
  className = '' 
}) => {
  const skeletonStyle = {
    ...(width && { width }),
    ...(height && { height })
  };

  // Si count > 1, afficher plusieurs skeletons
  if (count > 1) {
    return (
      <div className="skeleton-group">
        {[...Array(count)].map((_, index) => (
          <div
            key={index}
            className={`skeleton skeleton--${variant} ${className}`}
            style={skeletonStyle}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`skeleton skeleton--${variant} ${className}`}
      style={skeletonStyle}
    />
  );
};

/**
 * Composant SkeletonCard pour les cartes de projet
 */
export const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <Skeleton variant="rectangular" height="200px" className="skeleton-card__image" />
      <div className="skeleton-card__content">
        <Skeleton variant="title" width="80%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" count={2} />
        <div className="skeleton-card__tags">
          <Skeleton variant="rectangular" width="60px" height="24px" />
          <Skeleton variant="rectangular" width="80px" height="24px" />
          <Skeleton variant="rectangular" width="70px" height="24px" />
        </div>
      </div>
    </div>
  );
};

/**
 * Composant SkeletonProfile pour la section About
 */
export const SkeletonProfile = () => {
  return (
    <div className="skeleton-profile">
      <Skeleton variant="circular" width="150px" height="150px" />
      <div className="skeleton-profile__content">
        <Skeleton variant="title" width="60%" />
        <Skeleton variant="text" count={4} />
      </div>
    </div>
  );
};

/**
 * Composant SkeletonTimeline pour la timeline
 */
export const SkeletonTimeline = () => {
  return (
    <div className="skeleton-timeline">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="skeleton-timeline__item">
          <div className="skeleton-timeline__dot">
            <Skeleton variant="circular" width="40px" height="40px" />
          </div>
          <div className="skeleton-timeline__content">
            <Skeleton variant="title" width="40%" />
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="text" count={3} />
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Composant SkeletonSkill pour les barres de compétences
 */
export const SkeletonSkill = ({ count = 6 }) => {
  return (
    <div className="skeleton-skills">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="skeleton-skill">
          <div className="skeleton-skill__header">
            <Skeleton variant="text" width="100px" />
            <Skeleton variant="text" width="40px" />
          </div>
          <Skeleton variant="rectangular" height="8px" className="skeleton-skill__bar" />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;