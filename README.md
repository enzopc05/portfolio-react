# 📚 Guide des Fonctionnalités - Portfolio React

Ce document liste **toutes les fonctionnalités disponibles** dans ton portfolio React que tu peux utiliser pour améliorer progressivement ton projet.

---

## 📑 Table des matières

1. [Composants de Layout](#1-composants-de-layout)
2. [Sections Principales](#2-sections-principales)
3. [Composants Communs Réutilisables](#3-composants-communs-réutilisables)
4. [Composants d'Expérience Utilisateur](#4-composants-dexpérience-utilisateur)
5. [Effets Visuels et Animations](#5-effets-visuels-et-animations)
6. [Hooks Personnalisés](#6-hooks-personnalisés)
7. [Gestion des Données](#7-gestion-des-données)
8. [Styles et Thèmes](#8-styles-et-thèmes)
9. [Fonctionnalités Avancées](#9-fonctionnalités-avancées)
10. [Améliorations Possibles](#10-améliorations-possibles)

---

## 1. 🏗️ Composants de Layout

### Header (Navigation)
**Fichier :** `src/components/layout/Header.jsx`

**Fonctionnalités :**
- ✅ Navigation fixe avec effet de scroll
- ✅ Menu burger responsive (mobile)
- ✅ Smooth scroll vers sections
- ✅ Affichage nom + formation + année

**Comment utiliser :**
```jsx
import Header from './components/layout/Header';

// Dans ton App.js
<Header />
```

**Personnalisations possibles :**
- Ajouter des liens dans `navItems`
- Modifier les styles dans `src/styles/components/Header.css`
- Changer la hauteur du scroll trigger (actuellement 50px)

---

### Footer
**Fichier :** `src/components/layout/Footer.jsx`

**Fonctionnalités :**
- ✅ 3 colonnes : Contact, Liens rapides, Réseaux sociaux
- ✅ Liens légaux (RGPD, Mentions légales)
- ✅ Copyright automatique avec année dynamique
- ✅ Smooth scroll vers sections

**Comment utiliser :**
```jsx
import Footer from './components/layout/Footer';

<Footer />
```

---

### ThemeToggle (Bouton Jour/Nuit)
**Fichier :** `src/components/layout/ThemeToggle.jsx`

**Fonctionnalités :**
- ✅ Switch entre mode jour (☀️) et nuit (🌙)
- ✅ Persistance dans localStorage
- ✅ Animations de rotation
- ✅ Tooltips au survol

**Comment utiliser :**
```jsx
import { useTheme } from '../context/ThemeContext';

const { theme, toggleTheme } = useTheme();

// Thème actuel : theme (string: 'light' ou 'dark')
// Changer de thème : toggleTheme()
```

---

## 2. 📄 Sections Principales

### Hero (Section d'accueil)
**Fichier :** `src/components/sections/Hero.jsx`

**Fonctionnalités :**
- ✅ Photo de profil avec effets (rayons soleil / étoiles lune)
- ✅ Particules dorées (jour) / étoiles orbitales (nuit)
- ✅ Texte d'introduction animé
- ✅ Boutons CTA (Projets, CV)
- ✅ Liens sociaux (GitHub, LinkedIn, Email)
- ✅ Indicateur de scroll

**Photos thématiques :**
- Photo jour : `/assets/images/photo2moi.jpg`
- Photo nuit : `/assets/images/photo2moiNuit.jpg`

**Améliorations possibles :**
- Ajouter plus de réseaux sociaux
- Personnaliser les animations de particules
- Ajouter un lecteur audio de présentation

---

### About (À propos)
**Fichier :** `src/components/sections/About.jsx`

**Fonctionnalités :**
- ✅ Photo de profil avec décoration animée
- ✅ Texte de présentation
- ✅ Statistiques (Année, Projets, Technologies)
- ✅ Boutons d'action (CV, Contact)
- ✅ Centres d'intérêt (4 cartes)

**Comment ajouter un centre d'intérêt :**
```jsx
<div className="about__interest">
  <div className="about__interest-icon">🎮</div>
  <h4>Gaming</h4>
  <p>Description...</p>
</div>
```

---

### Projects (Projets)
**Fichier :** `src/components/sections/Projects.jsx`

**Fonctionnalités :**
- ✅ Filtrage par technologie et année
- ✅ Compteur de projets
- ✅ Grille responsive
- ✅ Modal détaillé par projet
- ✅ Liens GitHub et Démo

**Comment ajouter un projet :**
Modifier `src/data/portfolioData.js` :
```javascript
{
  id: 11,
  title: "Nouveau Projet",
  category: "ecole", // ou "entreprise"
  year: 2025,
  yearOfStudy: 3,
  technologies: ["React", "Node.js"],
  image: "/images/projects/mon-projet.png",
  shortDescription: "Description courte",
  fullDescription: "Description détaillée...",
  features: ["Feature 1", "Feature 2"],
  learnings: ["Apprentissage 1", "Apprentissage 2"],
  githubUrl: "https://github.com/...",
  demoUrl: "https://..."
}
```

---

### Skills (Compétences)
**Fichier :** `src/components/sections/Skills.jsx`

**Fonctionnalités :**
- ✅ 4 catégories (Web, Programmation, BDD, Outils)
- ✅ Onglets cliquables
- ✅ Barres de progression animées avec couleurs
- ✅ Niveau moyen par catégorie
- ✅ Statistiques globales
- ✅ Légende des niveaux

**Comment ajouter une compétence :**
Dans `src/data/portfolioData.js` :
```javascript
export const skills = {
  webDev: {
    category: "Développement Web",
    items: [
      { name: "TypeScript", level: 75, color: "#3178C6" },
      // Ajouter ici
    ]
  }
}
```

---

### Timeline (Parcours)
**Fichier :** `src/components/sections/Timeline.jsx`

**Fonctionnalités :**
- ✅ Timeline verticale alternée (gauche/droite)
- ✅ Marqueurs colorés avec icônes
- ✅ Badge "En cours" pour l'expérience actuelle
- ✅ Liste de réalisations
- ✅ Statistiques du parcours (4 cartes)

**Comment ajouter une étape :**
Dans `src/data/portfolioData.js` :
```javascript
{
  id: 6,
  year: "2025 - Aujourd'hui",
  period: "Nouveau poste",
  icon: "🚀",
  description: "Description...",
  achievements: [
    "Réalisation 1",
    "Réalisation 2"
  ],
  color: "#ff6b6b",
  isCurrent: true
}
```

---

### Contact (Formulaire)
**Fichier :** `src/components/sections/Contact.jsx`

**Fonctionnalités :**
- ✅ Formulaire Formspree fonctionnel
- ✅ 3 cartes d'info (Email, Téléphone, Localisation)
- ✅ Réseaux sociaux
- ✅ Checkbox RGPD obligatoire
- ✅ Messages de succès/erreur
- ✅ Validation côté client

**Personnaliser Formspree :**
Ligne 28 de `Contact.jsx`, modifier l'URL :
```javascript
const response = await fetch('https://formspree.io/f/TON_ID_ICI', {
```

---

## 3. 🧩 Composants Communs Réutilisables

### ProjectCard
**Fichier :** `src/components/common/ProjectCard.jsx`

**Fonctionnalités :**
- ✅ Carte de projet avec image
- ✅ Technologies affichées (max 3 + compteur)
- ✅ Overlay au survol
- ✅ Animation fadeInUp

**Utilisation :**
```jsx
<ProjectCard project={projectData} onClick={handleClick} />
```

---

### ProjectModal
**Fichier :** `src/components/common/ProjectModal.jsx`

**Fonctionnalités :**
- ✅ Modal détaillé plein écran
- ✅ Sections : Description, Technologies, Fonctionnalités, Apprentissages
- ✅ Informations complémentaires (année, catégorie, période)
- ✅ Liens GitHub et Démo
- ✅ Fermeture avec bouton ou clic extérieur

**Utilisation :**
```jsx
{selectedProject && (
  <ProjectModal project={selectedProject} onClose={closeModal} />
)}
```

---

### SkillBar
**Fichier :** `src/components/common/SkillBar.jsx`

**Fonctionnalités :**
- ✅ Barre de progression animée
- ✅ Couleur personnalisable
- ✅ Animation au scroll (avec IntersectionObserver)
- ✅ Effet de brillance (glow)

**Utilisation :**
```jsx
<SkillBar 
  name="React" 
  level={85} 
  color="#61DAFB" 
  isVisible={isVisible} 
/>
```

---

## 4. 🎨 Composants d'Expérience Utilisateur

### ScrollToTop
**Fichier :** `src/components/common/ScrollToTop.jsx`
**Style :** `src/styles/components/ScrollToTop.css`

**Fonctionnalités :**
- ✅ Bouton "retour en haut" avec cercle de progression
- ✅ Apparition après X pixels de scroll (configurable)
- ✅ Position configurable (bottom-right, bottom-left)
- ✅ Animation smooth scroll
- ✅ Indicateur visuel du pourcentage de scroll

**Utilisation :**
```jsx
<ScrollToTop 
  showAfter={300}        // Pixels avant apparition
  position="bottom-right" // Position du bouton
/>
```

**Dans ton App.js :**
Déjà installé ! Ligne 120 de `App.js`

---

### Toast (Notifications)
**Fichier :** `src/components/common/Toast.jsx`
**Style :** `src/styles/components/Toast.css`
**Hook :** `src/hooks/useToast.js`

**Fonctionnalités :**
- ✅ 4 types : success, error, warning, info
- ✅ 6 positions configurables
- ✅ Durée personnalisable
- ✅ Barre de progression
- ✅ Fermeture manuelle ou automatique

**Comment utiliser :**

1. **Importer le hook :**
```jsx
import useToast from '../hooks/useToast';
```

2. **Dans ton composant :**
```jsx
const { toast, showToast, hideToast } = useToast();

// Afficher une notification
showToast('Message envoyé avec succès !', 'success');

// Dans le JSX
{toast.isVisible && (
  <Toast
    message={toast.message}
    type={toast.type}
    isVisible={toast.isVisible}
    onClose={hideToast}
    position="top-right"
    duration={3000}
  />
)}
```

**Exemples :**
```jsx
showToast('Opération réussie !', 'success');
showToast('Une erreur est survenue', 'error');
showToast('Attention : champ manquant', 'warning');
showToast('Information importante', 'info');
```

---

### Skeleton (Chargement)
**Fichier :** `src/components/common/Skeleton.jsx`
**Style :** `src/styles/components/Skeleton.css`

**Fonctionnalités :**
- ✅ Placeholder animé pendant le chargement
- ✅ 4 variantes : text, title, circular, rectangular
- ✅ Composants pré-configurés : SkeletonCard, SkeletonProfile, SkeletonTimeline, SkeletonSkill
- ✅ Largeur et hauteur personnalisables

**Comment utiliser :**

**Skeleton basique :**
```jsx
import Skeleton from './components/common/Skeleton';

<Skeleton variant="text" width="200px" count={3} />
<Skeleton variant="title" width="80%" />
<Skeleton variant="circular" width="100px" height="100px" />
<Skeleton variant="rectangular" height="300px" />
```

**Skeletons pré-configurés :**
```jsx
import { SkeletonCard, SkeletonProfile, SkeletonTimeline, SkeletonSkill } from './components/common/Skeleton';

// Pendant le chargement des projets
{isLoading ? (
  <SkeletonCard />
) : (
  <ProjectCard project={project} />
)}

// Pendant le chargement du profil
<SkeletonProfile />

// Pendant le chargement de la timeline
<SkeletonTimeline />

// Pendant le chargement des compétences
<SkeletonSkill count={6} />
```

---

### NotFound (Page 404)
**Fichier :** `src/components/NotFound.jsx`
**Style :** `src/styles/components/NotFound.css`

**Fonctionnalités :**
- ✅ Design artistique avec "404" animé
- ✅ Orbites décoratives
- ✅ Bouton retour à l'accueil
- ✅ Bouton page précédente
- ✅ Liens utiles vers sections principales

**Configuration :**
Déjà configuré dans `App.js` ligne 101 :
```jsx
<Route path="*" element={<NotFound />} />
```

---

## 5. ✨ Effets Visuels et Animations

### Particles (Particules animées)
**Fichier :** `src/components/Particles.jsx`
**Style :** `src/styles/components/Particles.css`

**Fonctionnalités :**
- ✅ Mode jour : particules dorées (50)
- ✅ Mode nuit : étoiles scintillantes (100)
- ✅ Animation sur canvas HTML5
- ✅ Mouvement fluide avec rebond

**Personnalisation :**
Dans `Particles.jsx`, ligne 23 :
```javascript
const particleCount = theme === 'light' ? 50 : 100;
```

---

### AnimatedBackground
**Fichier :** `src/components/AnimatedBackground.jsx`
**Style :** `src/styles/components/AnimatedBackground.css`

**Fonctionnalités :**
- ✅ 3 orbes de gradient flottants
- ✅ Mesh gradient (grille de fond)
- ✅ Couleurs adaptées au thème
- ✅ Animations de pulsation

---

### FloatingShapes
**Fichier :** `src/components/FloatingShapes.jsx`
**Style :** `src/styles/components/FloatingShapes.css`

**Fonctionnalités :**
- ✅ 5 formes géométriques : cercle, carré, triangle, hexagone
- ✅ Animations de rotation et translation
- ✅ Opacité réduite pour ne pas gêner la lecture

---

### CustomCursor
**Fichier :** `src/components/CustomCursor.jsx`
**Style :** `src/styles/components/CustomCursor.css`

**Fonctionnalités :**
- ✅ Curseur personnalisé avec cercle et point
- ✅ Effet de traîne fluide
- ✅ Agrandissement au survol d'éléments cliquables
- ✅ Désactivé sur mobile

**Désactiver si besoin :**
Dans `App.js`, commenter ligne 78 :
```jsx
// <CustomCursor />
```

---

### ThemeTransition
**Fichier :** `src/components/ThemeTransition.jsx`
**Style :** `src/styles/components/ThemeTransition.css`

**Fonctionnalités :**
- ✅ Animation lors du changement de thème
- ✅ Icône soleil/lune qui tourne
- ✅ Effet ripple qui se propage
- ✅ Durée : 1 seconde

---

### PhotoEffects (Effets photo Hero)
**Fichier CSS :** `src/styles/components/PhotoEffects.css`

**Mode Jour (Soleil) :**
- ✅ Rayons de soleil rotatifs (2 couches)
- ✅ 8 particules dorées orbitales
- ✅ Effet de pulsation lumineuse

**Mode Nuit (Lune) :**
- ✅ Aura lunaire avec dégradé bleu
- ✅ 12 étoiles orbitales avec effet de croix
- ✅ Animation de scintillement

---

## 6. 🪝 Hooks Personnalisés

### useTheme
**Fichier :** `src/context/ThemeContext.jsx`

**Fonctionnalités :**
- ✅ Gestion globale du thème (light/dark)
- ✅ Persistance localStorage
- ✅ Application automatique au `<body>`

**Utilisation :**
```jsx
import { useTheme } from '../context/ThemeContext';

const { theme, toggleTheme } = useTheme();

// theme : 'light' ou 'dark'
// toggleTheme() : fonction pour changer
```

---

### useScrollPosition
**Fichier :** `src/hooks/useScrollPosition.js`

**Fonctionnalités :**
- ✅ Détecte si la page a scrollé > 50px
- ✅ Retourne un boolean `scrolled`

**Utilisation :**
```jsx
import { useScrollPosition } from '../hooks/useScrollPosition';

const scrolled = useScrollPosition();
// scrolled : true/false
```

---

### useIntersectionObserver
**Fichier :** `src/hooks/useIntersectionObserver.js`

**Fonctionnalités :**
- ✅ Détecte quand un élément entre dans le viewport
- ✅ Animation une seule fois (hasAnimated)
- ✅ Threshold configurable

**Utilisation :**
```jsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const [elementRef, isVisible] = useIntersectionObserver();

<section ref={elementRef}>
  {isVisible && <div className="animate-in">Contenu</div>}
</section>
```

---

### useFilter
**Fichier :** `src/hooks/useFilter.js`

**Fonctionnalités :**
- ✅ Filtrage générique d'items
- ✅ Fonction de filtre personnalisable
- ✅ Reset des filtres

**Utilisation :**
```jsx
import { useFilter } from '../hooks/useFilter';

const filterFunction = (item, filters) => {
  if (filters.category && item.category !== filters.category) return false;
  return true;
};

const { filteredItems, filters, updateFilter, resetFilters } = useFilter(
  items,
  filterFunction
);

// Mettre à jour un filtre
updateFilter('category', 'web');

// Réinitialiser
resetFilters();
```

---

### useScrollAnimations
**Fichier :** `src/hooks/useScrollAnimations.js`

**Fonctionnalités :**
- ✅ Effet parallaxe sur les particules
- ✅ Animations d'apparition au scroll
- ✅ Transitions fluides entre sections

**Utilisation :**
```jsx
import { useScrollAnimations } from '../hooks/useScrollAnimations';

// Dans ton composant
useScrollAnimations();
```

**Déjà installé dans `App.js` !**

---

### useToast
**Fichier :** `src/hooks/useToast.js`

**Voir section Toast ci-dessus pour l'utilisation complète.**

---

## 7. 💾 Gestion des Données

### portfolioData.js
**Fichier :** `src/data/portfolioData.js`

**Contenu :**
```javascript
export const personalInfo = { ... }    // Infos personnelles
export const projects = [ ... ]        // Liste des projets
export const skills = { ... }          // Compétences par catégorie
export const timeline = [ ... ]        // Parcours chronologique
```

**Fonctions utilitaires :**
```javascript
getCurrentAcademicYear()           // "2024-2025"
getProjectsByYear(year)            // Projets d'une année spécifique
getCurrentYearProjects()           // Projets de l'année en cours
getTotalProjects()                 // Nombre total de projets
getAllTechnologies()               // Liste unique de toutes les technos
```

**Comment utiliser :**
```jsx
import { personalInfo, projects, skills, timeline } from './data/portfolioData';
```

---

## 8. 🎨 Styles et Thèmes

### Variables CSS Globales
**Fichier :** `src/styles/theme.css`

**Variables disponibles :**
```css
/* Mode Jour */
[data-theme="light"] {
  --bg-color: #fff8e7;
  --bg-secondary: #faf7f2;
  --text-color: #333;
  --text-secondary: #555;
  --primary-color: #daab3a;
  --secondary-color: #b67332;
  --accent-color: #f4a460;
  --border-color: #ddd;
  --shadow: rgba(182, 115, 50, 0.2);
  --card-bg: #ffffff;
}

/* Mode Nuit */
[data-theme="dark"] {
  --bg-color: #1a1a2e;
  --bg-secondary: #16213e;
  --text-color: #eee;
  --text-secondary: #ccc;
  --primary-color: #4a5568;
  --secondary-color: #6c7a89;
  --accent-color: #a8b2c1;
  --border-color: #2d3748;
  --shadow: rgba(0, 0, 0, 0.5);
  --card-bg: #0f3460;
}
```

**Comment modifier les couleurs :**
Éditer `src/styles/theme.css` lignes 2-16 (light) et 18-32 (dark).

---

### Effets Visuels Globaux
**Fichier :** `src/styles/visual-enhancements.css`

**Classes disponibles :**

**Glassmorphism :**
```css
.glass-card {
  /* Effet verre dépoli */
}
```

**Effet de brillance :**
```css
.shine-effect {
  /* Effet de lumière au survol */
}
```

**Ombres dynamiques :**
```css
.dynamic-shadow {
  /* Ombre qui s'agrandit au survol */
}
```

**Texte avec gradient animé :**
```css
.gradient-text-animated {
  /* Texte avec dégradé de couleurs qui bouge */
}
```

**Effet hover sur titres :**
```css
.title-hover-effect {
  /* Soulignement animé au survol */
}
```

**Effet pulse :**
```css
.pulse-effect {
  /* Pulsation continue */
}
```

---

## 9. 🚀 Fonctionnalités Avancées

### Pages Légales (RGPD)
**Fichiers :**
- `src/components/legal/MentionsLegales.jsx`
- `src/components/legal/PolitiqueConfidentialite.jsx`

**Routes configurées :**
- `/mentions-legales`
- `/politique-confidentialite`

**Comment personnaliser :**
Éditer les composants pour mettre à jour tes informations personnelles.

---

### Smooth Scroll
**Déjà installé !**

**Comment ajouter une section scrollable :**
```jsx
// Dans le lien
<a href="#ma-section">Aller à la section</a>

// Dans la section
<section id="ma-section">...</section>
```

**CSS global dans `visual-enhancements.css` :**
```css
html {
  scroll-behavior: smooth;
}
```

---

### Scrollbar Personnalisée
**Déjà installé dans `visual-enhancements.css` !**

Personnaliser dans `src/styles/visual-enhancements.css` lignes 320-340.

---

## 10. 🔮 Améliorations Possibles

### Faciles (1-2h)

1. **Ajouter un bouton "Télécharger CV" dans le Hero**
   - Déjà présent ! Ligne 47 de `Hero.jsx`

2. **Ajouter plus de réseaux sociaux**
   - Éditer `personalInfo` dans `portfolioData.js`
   - Ajouter les icônes dans `Hero.jsx` ligne 51

3. **Changer les couleurs du thème**
   - Éditer `src/styles/theme.css`

4. **Ajouter un nouveau projet**
   - Ajouter dans `projects` array dans `portfolioData.js`

---

### Moyennes (2-5h)

1. **Système de blog intégré**
   - Créer `src/components/sections/Blog.jsx`
   - Ajouter `src/data/blogData.js`
   - Créer la route dans `App.js`

2. **Galerie de photos/certificats**
   - Créer `src/components/sections/Gallery.jsx`
   - Utiliser une lightbox (ex: `react-image-lightbox`)

3. **Section Témoignages**
   - Créer `src/components/sections/Testimonials.jsx`
   - Ajouter dans `portfolioData.js`

4. **Mode sombre automatique**
   - Détecter `prefers-color-scheme: dark`
   - Modifier `ThemeContext.jsx`

---

### Avancées (5-10h)

1. **Multi-langue (FR/EN)**
   - Installer `react-i18next`
   - Créer `src/i18n/translations.js`
   - Wrapper l'app dans `I18nextProvider`

2. **Animations de page (transitions de route)**
   - Utiliser `framer-motion` (déjà installé !)
   - Wrapper les routes dans `<AnimatePresence>`

3. **Mode Admin pour gérer les projets**
   - Créer `src/components/admin/Dashboard.jsx`
   - Authentification Firebase ou Supabase
   - CRUD pour projets

4. **Analytics et tracking**
   - Intégrer Google Analytics 4
   - Tracking des clics sur projets
   - Heat maps avec Hotjar

---

## 📦 Dépendances Actuelles

```json
{
  "@fortawesome/fontawesome-free": "^7.1.0",
  "framer-motion": "^12.23.25",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.9.5"
}
```

**Dépendances à considérer pour les améliorations :**
- `react-i18next` : Multi-langue
- `react-image-lightbox` : Galerie photos
- `react-ga4` : Google Analytics
- `firebase` ou `supabase` : Backend et auth
- `react-hook-form` : Gestion de formulaires avancée
- `react-toastify` : Alternative aux toasts (déjà créé custom)

---

## 🎯 Quick Wins (à faire maintenant)

1. ✅ **Ajouter plus de projets**
   - Fichier : `src/data/portfolioData.js`
   - Ajouter dans l'array `projects`

2. ✅ **Mettre à jour les infos personnelles**
   - Fichier : `src/data/portfolioData.js`
   - Section `personalInfo`

3. ✅ **Ajouter tes vraies photos**
   - Remplacer dans `/public/assets/images/`
   - Noms : `photo2moi.jpg`, `photo2moiNuit.jpg`

4. ✅ **Tester les toasts**
   - Utiliser `useToast` dans le formulaire de contact
   - Afficher succès/erreur

5. ✅ **Personnaliser les couleurs**
   - Fichier : `src/styles/theme.css`
   - Variables CSS

---

**Ressources :**
- [Documentation React](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com)
